import { asyncHandler } from '../utils/async-handler.js'
import { ApiError } from '../utils/api-error.js'
import { db } from "../libs/db.js"
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { UserRole } from '../generated/prisma/index.js'
import jwt from 'jsonwebtoken'
import { sendVerificationEmail } from '../utils/mail.js'
import { ApiResponse } from '../utils/api-response.js'

const registerUserController = asyncHandler( async (req, res) => {
    
    const { name, email, password, phone, role } = req.body;

    // 1. Validate required fields
    if (!email || !password || !phone) {
        return res.status(400).json(new ApiError(400, "All fields are required."));
    }

    // 2. Check for existing user
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
        return res
        .status(409).json(new ApiError(409, "A user already exists with this email."));
    }
    
    // 3. Hash password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Generate email verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const tokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // 5. Create new user
    const newUser = await db.user.create({
        data: {
            name: name || "", // fallback
            email,
            password: hashedPassword,
            phone,
            role: role ?? UserRole.USER,
            emailVerificationToken: verificationToken,
            emailVerificationExpiry: tokenExpiry,
        },
    });

    // 6. Send email with token 
    await sendVerificationEmail({
        email,
        name,
        verificationToken
    });

    // 7. Respond with success
    return res.status(201).json( new ApiResponse(201, {newUser}, "User registered successfully"));
});

const verifyEmailController = asyncHandler( async (req, res) => {

    const { token } = req.params;

    const existingUser = await db.user.findFirst({
        where: { emailVerificationToken: token }
    });

    if (!existingUser || existingUser.emailVerificationExpiry < Date.now()) {
        return res.status(400).json(new ApiError(400, "Invalid or Expired verification token"));
    }

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            isEmailVerified: true,
            emailVerificationToken: null,
            emailVerificationExpiry: null,
        }
    });

    return res.status(200).json(new ApiResponse(200, {}, "Email verified successfully"));
});

export { 
    registerUserController,
    verifyEmailController,
};
