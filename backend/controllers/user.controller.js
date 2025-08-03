import userModel from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";

const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log("Registering user:", req.body);

    const { fullname, email, password } = req.body;
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

export { registerUser };
