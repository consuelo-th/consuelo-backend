import { Router } from "express";
const router = Router();

import { isAdmin } from "../modules/auth.js";
import { getAllTips, createTip, deleteTip, getOneTip, updateTip } from "../handlers/mentalHealthTips.js";
import { upload } from "../modules/upload.js";


router.get("/tip", getAllTips);
router.get("/tip/:id", getOneTip);
router.post("/tip", createTip);
router.put("/tip/:id", updateTip);
router.delete("/tip/:id", deleteTip);



export default router;