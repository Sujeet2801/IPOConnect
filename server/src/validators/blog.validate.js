import { body } from 'express-validator';

export const blogValidationRules = () => {
    return [
        body('title')
            .notEmpty().withMessage('Title is required')
            .isLength({ min: 5 }).withMessage('Title must be at least 5 characters long')
            .isString().withMessage('Title must be a string'),
        body('imageUrl')
            .notEmpty().withMessage('Image URL is required')
            .isURL().withMessage('Image URL must be a valid URL'),
        body('externalLink')
            .notEmpty().withMessage('External Link is required')
            .isURL().withMessage('External Link must be a valid URL'),
        body('publishDate')
            .optional()
            .isISO8601().withMessage('Publish Date must be a valid date'),
    ]
}
