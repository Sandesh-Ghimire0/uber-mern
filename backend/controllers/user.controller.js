import { validationResult } from "express-validator";

import { createUser } from "../services/user.service.js";
import userModel from "../models/user.model.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";

const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserExists = await userModel.findOne({ email });
    if (isUserExists) {
        return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await userModel.hashPassword(password);


    try {
        const user = await createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
        });

        const token = user.generateAuthToken();

        return res.status(201).json({ token, user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = user.generateAuthToken();
    return res.status(200).cookie("token", token).json({ token, user });
};

const getUserProfile = async (req, res) => {
    return res.status(200).json({ user: req.user });
};

const logoutUser = async (req, res) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistTokenModel.create({ token });

    return res.status(200).json({ message: "Logged out successfully" });
};

export { registerUser, loginUser, getUserProfile, logoutUser };
