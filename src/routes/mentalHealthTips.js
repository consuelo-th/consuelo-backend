import { Router } from "express";
const router = Router();

import { isAdmin } from "../modules/auth.js";
import { getAllTips, createTip, deleteTip, getOneTip, updateTip } from "../handlers/mentalHealthTips.js";
import { upload } from "../modules/upload.js";


router.get("/tip", getAllTips);
router.get("/tip:id", createTip);
router.post("/tip", deleteTip);
router.put("/tip/:id", getOneTip);
router.delete("/tip/:id", updateTip);



export default router;