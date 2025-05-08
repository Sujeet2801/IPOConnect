import { body } from 'express-validator';

export const sharkInvestorValidationRules = () => {
    return [
        body('sharkName')
            .notEmpty().withMessage('Shark name is required')
            .isLength({ min: 3 }).withMessage('Shark name must be at least 3 characters long')
            .isString().withMessage('Shark name must be a string'),
        body('imageUrl')
            .notEmpty().withMessage('Image URL is required')
            .isURL().withMessage('Image URL must be a valid URL'),
        body('description')
            .notEmpty().withMessage('Description is required')
            .isString().withMessage('Description must be a string'),
        body('netWorth')
            .notEmpty().withMessage('Net worth is required')
            .isString().withMessage('Net worth must be a string'),
        body('portfolio')
            .notEmpty().withMessage('Portfolio is required')
            .isString().withMessage('Portfolio must be a string'),
        body('sectorFocus')
            .optional()
            .isObject().withMessage('Sector Focus must be a valid JSON Object'),
        body('stageFocus')
            .optional()
            .isObject().withMessage('Stage Focus must be a valid JSON Object'),
        body('notableInvestments')
            .optional()
            .isObject().withMessage('Notable Investments must be a valid JSON Object'),
        body('achievements')
            .optional()
            .isObject().withMessage('Achievements must be a valid JSON Object'),
        body('smLink')
            .optional()
            .isObject().withMessage('Social Media Link must be a valid JSON Object'),
]}
