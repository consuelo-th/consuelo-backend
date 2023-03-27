import mongoose from "mongoose";
import db from "../db.js";

const selfAffirmationSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true
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
    }
  });
  
  const SelfAffirmation = mongoose.model('SelfAffirmation', selfAffirmationSchema);
  
  
  
  export default SelfAffirmation;