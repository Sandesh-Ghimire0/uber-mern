import express from "express";
import { body } from "express-validator";

import {
    loginUser,
    registerUser,
    getUserProfile,
    logoutUser,
} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
    "/register",
    [
        body("fullname.firstname")
            .isLength({ min: 3 })
            .withMessage("First name must be at least 3 characters long"),
        body("fullname.lastname")
            .optional()
            .isLength({ min: 3 })
            .withMessage("Last name must be at least 3 characters long"),
        body("email")
            .isEmail()
            .withMessage("Please provide a valid email address"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
    ],
    registerUser
);

router.post(
    "/login",
    [
        body("email")
            .isEmail()
            .withMessage("Please provide a valid email address"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
    ],
    loginUser
);

router.get("/profile", authUser, getUserProfile);

router.post("/logout",authUser, logoutUser)

export default router;
