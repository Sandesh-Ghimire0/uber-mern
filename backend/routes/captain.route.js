import express from "express";
import { body } from "express-validator";
import { registerCaptain,loginCaptain,logoutCaptain,getCaptainProfile } from "../controllers/captain.controller.js";
import { authCaptain } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
    "/register",
    [
        body("fullname.firstname")
            .isLength({ min: 3 })
            .withMessage("First name must be at least 3 characters long"),
        body("email")
            .isEmail()
            .withMessage("Please provide a valid email address"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
        body("vehicle.color")
            .isLength({ min: 3 })
            .withMessage("Vehicle color must be at least 3 characters long"),
        body("vehicle.plate")
            .isLength({ min: 3 })
            .withMessage("Vehicle plate must be at least 3 characters long"),
        body("vehicle.capacity")
            .isInt({ min: 1 })
            .withMessage("Vehicle capacity must be at least 1"),
        body("vehicle.vehicleType")
            .isIn(["car", "bike", "auto"])
            .withMessage("Vehicle type must be one of: car, bike, auto"),
    ],
    registerCaptain
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
    loginCaptain
);

router.get("/profile",authCaptain, getCaptainProfile);

router.post("/logout", authCaptain, logoutCaptain);

export default router;
