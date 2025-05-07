import { body } from 'express-validator';

export const ipoValidationRules = () => {
    return [
        body('companyName')
            .notEmpty().withMessage('Company name is required')
            .isString().withMessage('Company name must be a string'),
        body('priceBand')
            .notEmpty().withMessage('Price band is required')
            .isString().withMessage('Price band must be a string'),
        body('openDate')
            .notEmpty().withMessage('Open date is required')
            .isISO8601().withMessage('Open date must be a valid date'),
        body('closeDate')
            .notEmpty().withMessage('Close date is required')
            .isISO8601().withMessage('Close date must be a valid date'),
        body('issueSize')
            .notEmpty().withMessage('Issue size is required')
            .isString().withMessage('Issue size must be a string'),
        body('issueType')
            .notEmpty().withMessage('Issue type is required')
            .isString().withMessage('Issue type must be a string'),
        body('listingDate')
            .notEmpty().withMessage('Listing date is required')
            .isISO8601().withMessage('Listing date must be a valid date'),
        body('status')
            .notEmpty().withMessage('Status is required')
            .isIn(['UPCOMING', 'ONGOING', 'NEWLISTED']).withMessage('Invalid IPO status'),
]};
