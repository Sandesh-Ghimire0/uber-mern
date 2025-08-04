import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./db/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

connectDB();

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ------------------------------------------------------------------------------------------

import userRoutes from "./routes/user.route.js";
import captainRoutes from "./routes/captain.route.js";

app.use("/api/users", userRoutes);
app.use("/api/captains", captainRoutes);
