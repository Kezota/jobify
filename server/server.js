import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

// routers
import jobRouter from "./routers/jobRouter.js";
import authRouter from "./routers/authRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5100;

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

app.use(express.json());

app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);

// ========================================================================================================

// base url
app.post("/", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// error handler
app.use(errorHandlerMiddleware);

// not found
app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: "not found" });
});
