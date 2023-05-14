import { Router } from "express";
const router = Router();

import { isAdmin } from "../modules/auth.js";
import { getAllBlogs, createBlog, deleteBlog, getOneBlog, updateBlog } from "../handlers/blog.js";
import { getAllTips, createTip, deleteTip, getOneTip, updateTip } from "../handlers/mentalHealthTips.js";
import { getAllPosts, createPost, deletePost, getOnePost, updatePost } from "../handlers/post.js";
import { getAllAffirmations, getOneAffirmation, createAffirmation, updateAffirmation, deleteAffirmation } from "../handlers/selfAffirmation.js";

//extra permissions to be set

router.get("/selfaffirmation", getAllAffirmations);
router.get("/blog", getAllBlogs);
router.get("/blog/:id", getOneBlog);
router.post("/blog", createBlog);
router.put("/blog/:id", updateBlog);
router.delete("/blog/:id", deleteBlog);

router.get("/tip", getAllTips);
router.get("/tip/:id", getOneTip);
router.post("/tip", createTip);
router.put("/tip/:id", updateTip);
router.delete("/tip/:id", deleteTip);

router.get("/post", getAllPosts);
router.get("/post/:id", getOnePost);
router.post("/post", createPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

router.get("/selfaffirmation", getAllAffirmations);
router.get("/selfaffirmation/:id", getOneAffirmation);
router.post("/selfaffirmation", createAffirmation);
router.put("/selfaffirmation/:id", updateAffirmation);
router.delete("/selfaffirmation/:id", deleteAffirmation);



export default router;