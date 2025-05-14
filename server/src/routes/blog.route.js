import { Router } from "express";
import { 
    createBlogController, 
    updateBlogController, 
    deleteBlogController, 
    getAllBlogController
} from "../controllers/blog.controller.js";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/authRole.middleware.js";
import { blogValidationRules } from "../validators/blog.validate.js";
import { validate } from "../middlewares/validate.middleware.js"

const router = Router();

router
    .route("/blog")
    .post( isAuthenticated, authorizeRoles("ADMIN"), blogValidationRules(), validate, createBlogController );

router
    .route("/blog/:titleParams")
    .put( isAuthenticated, authorizeRoles("ADMIN"), updateBlogController );

router
    .route("/blog/:title")
    .delete( isAuthenticated, authorizeRoles("ADMIN"), deleteBlogController );

router
    .route("/blogs")
    .get( getAllBlogController );

export default router;
