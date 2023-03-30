import Post from "../models/post.js";
import Comment from "../models/comment.js";



export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            message: "success",
            data: posts
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
             message: 'Error fetching posts.' 
        });
    }
}

export const getOnePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        res.status(200).json({
            message: "success",
            data: post
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
             message: 'Error fetching post.' 
        });
    }
}
export const createPost = async (req, res) => {
    const { text, author } = req.body;
    try {
        const post = await Post.create({
            text,
            author
        })

        res.status(201).json({
            message: "post created",
            data: post
        })
        
    } catch (err) {
        console.error(err);
        res.status(500).json({
             message: 'cannot create post.' 
        });
    }
}
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { likes, comments } = req.body;

    try {
        const updatedPost = Post.findByIdAndUpdate(id, {
            likes,
            comments
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
             message: 'cannot update post.' 
        });
    }

}
export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPost = Post.findByIdAndDelete(id)
        res.status(200).json({
            mesage: "post deleted"
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
             message: 'An error occured, check if a post with is id exists' 
        });
    }

}

