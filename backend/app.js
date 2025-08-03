import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./db/db.js";
import cors from "cors";

connectDB();

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------------------------------------------------------------------------------------

import userRoutes from "./routes/user.route.js";
app.use("/api/users", userRoutes);
