import captainModel from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";
import blacklistTokenModel from "../models/blacklistToken.model.js";

//--------------------------------------register captain---------------------------------------------------------

const registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;
    const isCaptainExists = await captainModel.findOne({ email });
    if (isCaptainExists) {
        return res.status(400).json({ error: "Captain already exists" });
    }

    const hashedPassword = await captainModel.hashPassword(password);
    try {
        const captain = await createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        });
        const token = captain.generateAuthToken();

        return res.status(201).json({ token, captain });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//--------------------------------------login captain---------------------------------------------------------

const loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");

    if (!captain) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = captain.generateAuthToken();
    return res.status(200).cookie("token", token).json({ token, captain });
};

//--------------------------------------get captain profile---------------------------------------------------------

const getCaptainProfile = async (req, res) => {
    return res.status(200).json({ captain: req.captain });
};

//--------------------------------------logout captain---------------------------------------------------------

const logoutCaptain = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistTokenModel.create({ token });
    res.clearCookie("token");

    return res.status(200).json({ message: "Logged out successfully" });
};

export { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain };
