import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js"
import { ApiResponse } from "../utils/api-response.js"
import { db } from "../libs/db.js"

const createBlogController = asyncHandler( async (req, res) => {

    const { title, imageUrl, publishDate, externalLink } = req.body

    if(!title || !imageUrl || !externalLink){
        return res.status(400).json(new ApiError(400, "All field are required"))
    };

    const existingBlog = await db.blog.findUnique({ where: {title} })
    if(existingBlog){
        return res.status(400).json(new ApiError(400, "Blog already created"))
    };

    const newBlog = await db.blog.create({
        data: {
            title, imageUrl, publishDate, externalLink 
        }
    });

    return res.status(201).json(new ApiResponse(201, { newBlog }, "Blog created successfully"))
});

const updateBlogController = asyncHandler( async (req, res) => {

    let { titleParams } = req.params
    titleParams = titleParams.replace(/-/g, " ");

    const { title, imageUrl, externalLink } = req.body

    const existingBlog = await db.blog.findUnique({ where: { title: titleParams } })
    if(!existingBlog){
        return res.status(404).json(new ApiError(404, "Blog not exists"))
    };

    const updateBlog = await db.blog.update({
        where: { title: titleParams },
        data: {
            title: title || existingBlog.title,
            imageUrl: imageUrl || existingBlog.imageUrl,
            externalLink: externalLink || existingBlog.externalLink
        }
    });

    return res.status(201).json(new ApiResponse(201, { updateBlog }, "Blog updated successfully"))
});

const deleteBlogController = asyncHandler( async (req, res) => {
    
    let { title } = req.params
    title = title.replace(/-/g, " ");

    const existingBlog = await db.blog.findUnique({ where: { title } })
    if(!existingBlog){
        return res.status(404).json(new ApiError(404, "Blog not found"))
    };

    await db.blog.delete({ where: { title } });

    return res.status(200).json(new ApiResponse(200, {}, "Blog deleted successfully"));
});

const getAllBlogController = asyncHandler(async (req, res) => {

    const allBlog = await db.blog.findMany({
        orderBy: { title: "asc" }
    })

    return res.status(200).json(new ApiResponse(200, { allBlog }, "Blog data fetched"));
});

export {
    createBlogController,
    updateBlogController,
    deleteBlogController,
    getAllBlogController
}