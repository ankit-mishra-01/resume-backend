import mongoose from "mongoose";

export function connectDB(DB_URL) {
  const options = {
    dbName: "resume",
  };
  mongoose
    .connect(DB_URL, options)
    .then(() => {
      console.log("✅ Database connected successfully");
    })
    .catch((error) => {
      console.log("Error:", error);
    })
    .finally(() => process.exit());
}
