import { Router } from "express";
const router = Router();

import { isAdmin } from "../modules/auth.js";
import { getAllAffirmations, getOneAffirmation, createAffirmation, updateAffirmation, deleteAffirmation } from "../handlers/selfAffirmation.js";


router.get("/blog", getAllAffirmations);
router.get("/blog/:id", getOneAffirmation);
router.post("/blog", createAffirmation);
router.put("/blog/:id", updateAffirmation);
router.delete("/blog/:id", deleteAffirmation);


export default router;