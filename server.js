import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { connectDB } from "./configs/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/";

connectDB(DB_URL);

const app = express();
// middlewares
app.use(express.json()); //to handle req.body json data
app.use(cors()); //to handle req.body json data
app.use(express.urlencoded({ extended: true })); // To handle URL-encoded data

app.get("/", async (req, res) => {
  res.send("Hiiiiiiiiiiiiiiii");
});

app.listen(PORT, () => {
  console.log("✅ App is running on port", PORT);
});
