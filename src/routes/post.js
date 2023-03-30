import { Router } from "express";
const router = Router();
import { getAllPosts, createPost, deletePost, getOnePost, updatePost } from "../handlers/post.js";


router.get("/post", getAllPosts);
router.get("/post/:id", getOnePost);
router.post("/post", createPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);



export default router;