import { body } from "express-validator";

export const brokerValidationRules = () => {
    return [
        body("companyName")
            .notEmpty().withMessage("Company name is required"),
        body("companyLogo")
            .notEmpty().isURL().withMessage("Valid company logo URL is required"),
        body("ratings")
            .notEmpty()
            .isFloat({ min: 0, max: 5 }).withMessage("Ratings must be a number between 0 and 5"),
        body("reviews")
            .notEmpty()
            .isFloat({ min: 0 }).withMessage("Reviews must be a positive number"),
        body("accounts")
            .notEmpty().withMessage("Accounts info is required"),
        body("openAccLink")
            .notEmpty()
            .isURL().withMessage("Valid open account link is required"),
        body("learnMore")
            .notEmpty()
            .isURL().withMessage("Valid learn more link is required"),
        body("tradingCategory")
            .isArray({ min: 1 }).withMessage("Trading category must be a non-empty array"),
        body("accOpenCharge")
            .notEmpty().withMessage("Account opening charge is required"),
        body("maintainanceCharge")
            .notEmpty().withMessage("Maintenance charge is required"),
        body("deliveryCharge")
            .notEmpty().withMessage("Delivery charge is required"),
        body("intradayBrokerage")
            .notEmpty().withMessage("Intraday brokerage is required")
]};
