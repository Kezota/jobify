import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import cloudinary from "cloudinary";

// public folder
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

// routers
import jobRouter from "./routers/jobRouter.js";
import authRouter from "./routers/authRouter.js";
import userRouter from "./routers/userRouter.js";

// ========================================================================================================

dotenv.config();
const app = express();
const port = process.env.PORT || 5100;
const __dirname = dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/public")));

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

// ========================================================================================================

// base url
app.post("/", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// test route
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "test route" });
});

// error handler
app.use(errorHandlerMiddleware);

// not found
app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: "not found" });
});
