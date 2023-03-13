import { hashPassword, comparePassword, createJwt } from "../modules/auth.js";
// import db




export const createUser = async (req, res) => {
    const hash = await hashPassword(req.body.password);
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }

    // save user to db

    const token = createJwt(user);
    res.json({token})

}


export const loginUser = async (req, res) => {
    const user = {
        email: req.body.email, //GET email from db 
        password: req.body.password 
    }

    // If email exists in db check if password is correct
    const isValid = await comparePassword(req.body.password, user.password);

    if (!isValid) {
        res.status(401);
        res.json({message: "Incorrect username or password"});
        return;
    }

    // create token
    const token = createJwt(user);
    res.json({token});
}