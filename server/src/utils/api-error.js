class ApiError extends Error {
    /**
     * Custom API error class
     * @param {number} statusCode - HTTP status code
     * @param {string} [message=''] - Error message
     * @param {Array|Object} [error=[]] - Detailed error information
     * @param {string} [stack=''] - Optional stack trace
     */
    
    constructor(statusCode, message = '', error = [], stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.error = error;

    if (stack) {
        this.stack = stack;
    } else {
        Error.captureStackTrace(this, this.constructor);
    }
}

    /**
     * Serialize the error for API responses
     * @returns {Object}
     */
    toJSON() {
        return {
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            error: this.error,
        };
    }
}

export { ApiError };
