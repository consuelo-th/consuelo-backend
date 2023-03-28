import { Router } from "express";
const router = Router();

import { isAdmin } from "../modules/auth.js";
import { getAllAffirmations, getOneAffirmation, createAffirmation, updateAffirmation, deleteAffirmation } from "../handlers/selfAffirmation.js";


router.get("/selfaffirmation", getAllAffirmations);
router.get("/selfaffirmation/:id", getOneAffirmation);
router.post("/selfaffirmation", createAffirmation);
router.put("/selfaffirmation/:id", updateAffirmation);
router.delete("/selfaffirmation/:id", deleteAffirmation);


export default router;