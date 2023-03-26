import express from "express";
import cors from "cors";
import router from "router";
import { protect } from "./modules/auth.js";
import { createUser, loginUser } from "./handlers/user.js";
import blogRoutes from "./routes/blog.js"
import db from "./db.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/api', protect, blogRoutes);

app.post('/login', loginUser, (req, res) => {
    res.json({
        message: "login"
    })
})

app.post("/signup", createUser,  (req, res) => {
    res.json({
        message: "signup"
    })
})


export default app;