import Blog from "../models/blog.js";
import fs from "fs";
import path from "path";
import { upload } from "../modules/upload.js";


// CREATE
export const createBlog = async (req, res) => {
    const { title, body, image, authorId } = req.body;

    try {
        const newBlog = await Blog.create({
            title,
            body,
            image: {
                data: image.data,
                contentType: image.contentType
            },
            authorId
        });

        res.status(201).json({
            message: "blog created",
            data: newBlog
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating blog.' });
    }
}


// GET all 
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            message: "success",
            data: blogs
        });

      } catch (err) {
        console.error(err);
        res.status(500).json({
             message: 'Error getting blogs.' 
            });
      }
}

// GET one
export const getOneBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findOne({_id: id})
         
        res.status(200).json({
            message: "success",
            data: blog
        });
          
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching blog.' });
    }
    


}


// UPDATE
export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, body, imageBuffer, contentType } = req.body;

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, {
            title,
            body,
            image: {
                data: imageBuffer,
                contentType
            }
         }, { new: true });

        res.status(200).json({
            message: "update successful",
            data: updatedBlog
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating blog.' });
    }
        
}



// DELETE BLOG
export const deleteBlog = async(req, res) => {
    const { id } = req.params;

    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
        return res.status(404).json({ message: 'Blog not found.' });
        }

        res.status(200).json({
            message: "deleted",
            data: deletedBlog
        });

    } catch (err) {

        console.error(err);
        res.status(500).json({ message: 'Error deleting blog.' });
    }
}