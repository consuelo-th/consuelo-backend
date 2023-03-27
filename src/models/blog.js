import mongoose from "mongoose";
import db from "../db.js";

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    image: {
      data: Buffer,
      contentType: String
    },
    authorId: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    tags: {
      type: [String]
    },
    comments: [
      {
        author: String,
        body: String,
        date: {
          type: Date,
          default: Date.now
        }
      }
    ]
  });
  
  const Blog = mongoose.model('Blog', blogSchema);
  
  
  
  export default Blog;