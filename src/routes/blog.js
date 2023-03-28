import { Router } from "express";
const router = Router();

import { isAdmin } from "../modules/auth.js";
import { getAllBlogs, createBlog, deleteBlog, getOneBlog, updateBlog } from "../handlers/blog.js";
import { upload } from "../modules/upload.js";


router.get("/blog", getAllBlogs);
router.get("/blog/:id", getOneBlog);
router.post("/blog", createBlog);
router.put("/blog/:id", updateBlog);
router.delete("/blog/:id", deleteBlog);



export default router;