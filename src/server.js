import express from "express";
import cors from "cors";
import morgan from "morgan";
import { isAdmin, protect } from "./modules/auth.js";
import { createUser, loginUser } from "./handlers/user.js";
import blogRoutes from "./routes/blog.js"
import SelfAffirmationRoutes from "./routes/selfAffirmation.js";
import mentalHealthTipsRoutes from "./routes/mentalHealthTips.js";
import postRoutes from "./routes/post.js"
import adminRoutes from "./routes/admin.js"
import db from "./db.js";



const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        "status": "200",
        "message": "success",
        "data": [
            {
                "message": "Hello from consuelo! Our API is still in progress, see you soon!"
            }
        ]

    })
});

app.use('/api', protect, blogRoutes);
app.use('/api', protect, SelfAffirmationRoutes);
app.use('/api', protect, mentalHealthTipsRoutes);
app.use('/api', protect, postRoutes);
app.use('/api/admin', protect, isAdmin, adminRoutes)

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