import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./configs/connectDB.js";
import enquiryRouter from "./routes/enquiryRoutes.js";
import os from "os";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017";

// database connectivity
connectDB(DB_URL, {
  dbName: "resume",
  serverSelectionTimeoutMS: 30000,
});

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/enquiry", enquiryRouter);

app.get("/", async (req, res) => res.send("<h1>✅server up and running</h1>"));

app.listen(PORT, () => {
  console.log("✅ Server is Running on ", PORT);
});
