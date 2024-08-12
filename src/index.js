import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running at PORT : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed", err);
  });
