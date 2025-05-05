import { Router } from "express";
import {createBlogController, deleteBlogController, getAllBlogController, updateBlogController } from "../controllers/blog.controller.js";

const router = Router();

router.post("/blog", createBlogController)
router.put("/blog/:titleParams", updateBlogController)
router.delete("/blog/:title", deleteBlogController)
router.get("/blogs", getAllBlogController)

export default router;