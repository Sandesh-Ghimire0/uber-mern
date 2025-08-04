import captainModel from "../models/captain.model.js";
import {createCaptain} from "../services/captain.service.js";
import { validationResult } from "express-validator";

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

    try {
        const captain = await createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password,
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

export { registerCaptain };
