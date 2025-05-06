import { body } from 'express-validator';

export const sectorValidationRules = () => {
    return [
        body('sectorName')
            .notEmpty().withMessage('Sector name is required')
            .isString().withMessage('Sector name must be a string')
            .isLength({ min: 3 }).withMessage('Sector name must be at least 3 characters'),
        body('sectorDesc')
            .notEmpty().withMessage('Sector description is required')
            .isString().withMessage('Sector description must be a string'),
        body('marketCaps')
            .notEmpty().withMessage('Market caps is required')
            .isObject().withMessage('Market caps must be a valid JSON object'),
        body('marketInsights')
            .notEmpty().withMessage('Market insights is required')
            .isObject().withMessage('Market insights must be a valid JSON object'),
        body('opportunities')
            .notEmpty().withMessage('Opportunities is required')
            .isObject().withMessage('Opportunities must be a valid JSON object'),
]};
