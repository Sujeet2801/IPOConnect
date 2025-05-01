import Mailgen from "mailgen";
import nodemailer from "nodemailer";
import { ApiError } from "./api-error.js";

const sendMail = async (options) => {

    const mailGenerator = new Mailgen({
        theme: "default", // fixed typo
        product: {
        name: "IPOConnect Team",
        link: "https://ipoconnect.in",
        },
    });

    const emailBody = mailGenerator.generate(options.mailGenContent);
    const emailText = mailGenerator.generatePlaintext(options.mailGenContent);

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        secure: false, // Set true if using port 465
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS,
        },
    });

    const mailOptions = {
        from: '"IPOConnect" <ipoconnect@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: emailText,
        html: emailBody,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Failed to send email:", error.message);
        throw new ApiError(500, "Failed to send email. Please try again later.");
    }
};

// Generate email verification content
const emailVerificationMailGenContent = (name, verificationUrl) => ({
    body: {
        name,
        intro: "Welcome to IPOConnect! We're excited to have you on board.",
        action: {
        instructions: "To get started, please verify your email address:",
        button: {
            color: "#22BC66",
            text: "Verify Email",
            link: verificationUrl,
        },
        },
        outro: "Need help or have questions? Just reply to this email—we're happy to help!",
    },
});

// Generate forgot password email content
const forgotPasswordMailGenContent = (name, resetUrl) => ({
    body: {
        name,
        intro: "We received a request to reset your password.",
        action: {
        instructions: "Click the button below to reset your password:",
        button: {
            color: "#F2545B",
            text: "Reset Password",
            link: resetUrl,
        },
        },
        outro: "If you didn't request a password reset, you can safely ignore this email.",
    },
});

const sendVerificationEmail = async ({ email, name, verificationToken }) => {
    const verificationUrl = `${process.env.BASE_URL}/api/v1/users/verify/${verificationToken}`;
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            await sendMail({
                email,
                subject: "Verify Your Email - IPOConnect",
                mailGenContent: emailVerificationMailGenContent(name || "User", verificationUrl),
            });
            console.log("Verification email sent successfully.");
            break;
        } catch (error) {
            attempt++;
            console.warn(`Attempt ${attempt} failed:`, error.message);
    
            if (attempt >= maxRetries) {
            throw new ApiError(500, "Failed to send verification email after multiple attempts.");
            }

            // Exponential backoff
            const backoff = 500 * 2 ** (attempt - 1);
            await new Promise(res => setTimeout(res, backoff));
        }
    }
};

export {
    sendMail,
    emailVerificationMailGenContent,
    forgotPasswordMailGenContent,
    sendVerificationEmail
};
