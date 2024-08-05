import mongoose from "mongoose";

export default function connectDB(DB_URL, options) {
  mongoose
    .connect(DB_URL, options)
    .then(() => {
      console.log("✅ Database Connected successfully");
    })
    .catch((error) => {
      console.log(error.message);
    });
}
