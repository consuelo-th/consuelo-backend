import { Router } from "express";
const router = Router();


router.get("/blog", (req, res) => {
    res.json({
        message: "you are in, welldone sir"
    })
});
router.get("/blog/:id", (req, res) => {});
router.post("/blog", (req, res) => {});
router.put("/blog/:id", (req, res) => {});
router.delete("/blog/:id", (req, res) => {});



export default router;