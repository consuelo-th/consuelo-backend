import mongoose from "../db";

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    author: {
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