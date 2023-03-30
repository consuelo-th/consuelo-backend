import mongoose from "mongoose";
import db from "../db.js";

const mentalHealthTipSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true
    },
    authorId: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  });
  
  const mentalHealthTip = mongoose.model('mentalHealthTip', mentalHealthTipSchema);
  
  
  
  export default mentalHealthTip;