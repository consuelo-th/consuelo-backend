import express from "express";
import cors from "cors";
import { protect } from "./modules/auth.js";
import { createUser, loginUser } from "./handlers/user.js";
import blogRoutes from "./routes/blog.js"
import db from "./db.js";
import SelfAffirmation from "./models/selfAffirmation.js";


const app = express();
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
app.use('/api', protect, SelfAffirmation);

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