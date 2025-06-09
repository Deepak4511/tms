// index.js
// Import necessary modules
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnection from "./utils/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

dbConnection();

const port = process.env.PORT || 5000;

const app = express();

// Middleware setup
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes setup




app.listen(port, ()=> console.log(`Server listening on ${port}`))


