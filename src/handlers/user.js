import { hashPassword, comparePassword, createJwt } from "../modules/auth.js";
import User from "../models/user.js";

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const emailExist = await User.findOne({ email });
  if (emailExist) {
    res.status(409).json({ success: false, message: "Email already exist" });
  } else {
    const hash = await hashPassword(password);
    const user = {
      firstName,
      lastName,
      email,
      password: hash,
    };

    try {
      const newUser = new User(user);
      const savedUserDoc = await newUser.save();
      const savedUserWithoutPassword = savedUserDoc.toObject();
      delete savedUserWithoutPassword.password;

      const token = createJwt({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
      });

      res.status(200).json({
        success: true,
        message: "User created successfully",
        user: savedUserWithoutPassword,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
};

export const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(401).json({
      status: 401,
      message: "Incorrect username or password",
    });

    return;
  }

  const isValid = await comparePassword(req.body.password, user.password);

  if (!isValid) {
    res.status(401).json({
      status: 401,
      message: "Incorrect username or password",
    });
    return;
  }

  // create token
  const token = createJwt({
    id: user.id,
    email: user.email,
    isAdmin: user.isAdmin,
  });

  res.json({ ...user._doc, token });
};

export const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const userDetails = await User.findOne({ _id: userId }, { password: 0 });
    if (userDetails) {
      res.status(200).json({ found: true, ...userDetails._doc });
    } else {
      res.status(404).json({ found: false });
    }
  } catch (error) {
    if (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};
