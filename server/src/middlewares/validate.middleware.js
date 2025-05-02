import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validate = (req, res, next) => {

    const errors = validationResult(req)
    console.log(typeof errors);

    if(errors.isEmpty()){
        return next();
    }

    const extractedError = [];
    errors.array().map((err) => 
        
        extractedError.push({
            [err.path]: err.msg
        }))
        
        console.log(extractedError)
    
    throw new ApiError(422, "Recieved data is not valid", extractedError)
}
