import { body } from 'express-validator'

const userRegistrationValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Invalid email"),
        body("password")
            .notEmpty().withMessage("Password is required")
            .isLength({min: 8}).withMessage("Password should be at least 8 char")
            .isLength({max: 12}).withMessage("Password should not exceed 12 char"),
        body("name")
            .notEmpty().withMessage("Name is required"),
        body("phone")
            .trim()
            .notEmpty().withMessage("Phone no is required")
            .isNumeric().withMessage("Phone number must contain only digits.")
            .isLength({ min: 10, max: 10 }).withMessage("Phone number must be exactly 10 digits.")
    ]
}

const userLoginValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Invalid email"),
        body("password")
            .notEmpty().withMessage("Password is required")
            .isLength({min: 8}).withMessage("Password should be at least 8 char")
            .isLength({max: 12}).withMessage("Password should not exceed 12 char"),
    ]
}

export {userRegistrationValidator, userLoginValidator}