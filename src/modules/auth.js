import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const hashPassword = async (password) => {
    try {
        console.log(process.env.ENCRYPTION_SALT_ROUNDS)
      const salt = await bcrypt.genSalt(9);
      const hash = await bcrypt.hash(password, salt);
      return hash;

    } catch (error) {
      throw new Error(`Error hashing password: ${error.message}`);

    }
  };
  

export const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

export const createJwt = (user) => {
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET)

    return token;
}


export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;

    if(!bearer) {
        res.status(401);
        res.json({message: 'Not authorized', data: null})
        return;
    }

    const [,token] = bearer.split(" ");

    if (!token) {
        res.status(401);
        res.json({message: 'Invalid token', data: null})
        return;
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
        return;

    } catch (e) {
        console.log(e.message);
        res.status(402);
        res.json({message: 'Unauthorized', data: null});
        return;
    }
}


export const isAdmin = (req, res) => {
    const admin = req.user.isAdmin;

    if(!admin) {
        res.status(401);
        res.send({message: 'Can not perform operation'});
        return;
    }

    next();
    return;
}
