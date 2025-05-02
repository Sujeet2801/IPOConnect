import { asyncHandler } from '../utils/async-handler.js'
import { ApiError } from '../utils/api-error.js'
import { db } from "../libs/db.js"
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { UserRole } from '../generated/prisma/index.js'
import jwt from 'jsonwebtoken'
import { resendVerificationEmail, sendVerificationEmail } from '../utils/mail.js'
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

const loginUserController = asyncHandler( async (req, res) => {

    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
        return res.status(400).json(new ApiError(400, "Email and password are required"));
    }

    // 2. Check if user exists
    const existingUser = await db.user.findUnique({ where: { email } });
    if (!existingUser) {
        return res.status(404).json(new ApiError(404, "User not found"));
    }

    // 3. Compare password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
        return res.status(401).json(new ApiError(401, "Invalid email or password"));
    }

    // 4. Check email verification
    if (!existingUser.isEmailVerified) {
        return res.status(403)
                .json(new ApiError(403, "Email not verified. Please verify your email to continue."));
    }

    // 5. Generate JWT token
    const token = jwt.sign(
        { id: existingUser.id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    // 6. Set token in HTTP-only cookie
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json(
        new ApiResponse(200, { user: existingUser, token }, "Login successful")
    );
});

const logoutUserController = asyncHandler( async (req, res) => {
    res.clearCookie("token");
    res.status(200).json(new ApiResponse(200, {}, "Logout successful"));
});

export { 
    registerUserController,
    verifyEmailController,
    loginUserController,
    logoutUserController,
};
