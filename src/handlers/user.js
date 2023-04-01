import { hashPassword, comparePassword, createJwt } from "../modules/auth.js";
import User from "../models/user.js";

export const createUser = async (req, res) => {
    const hash = await hashPassword(req.body.password);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash
    }

    const newUser = new User(user);
    user.id = newUser.id;

    newUser.save()
        .then(user => console.log(user))
        .catch(err => console.log(err));
    const token = createJwt(user);
    res.json({token})

}


export const loginUser = async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) {
        res.status(401).json({
            status: 401,
            message: "Incorrect username or password"
        });

        return;
    }

    const isValid = await comparePassword(req.body.password, user.password);

    if (!isValid) {
        res.status(401).json({
            status: 401,
            message: "Incorrect username or password"
        });
        return;
    }

    // create token
    const token = createJwt({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
    });

    res.json({token});
}