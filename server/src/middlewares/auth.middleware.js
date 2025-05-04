import jwt from "jsonwebtoken"
import { ApiError } from "../utils/api-error.js"

export const isAuthenticated = async(req, res, next) => {
    const token = req.cookies?.token

    if(!token){
        return res.status(401).json(new ApiError(401, "Not authenticated"))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { id: decoded.id, role: decoded.role }
        next()
    } catch (error) {
        return res.status(401).json(new ApiError(401, "Invalid or Expired token"))
    }
}