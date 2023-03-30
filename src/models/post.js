import mongoose from "mongoose";
import commentSchema from "./comment.js";


const postSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    image: {
      type: String
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    comments: [commentSchema],
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  
  
const Post = mongoose.model('Post', postSchema);
export default Post;
  