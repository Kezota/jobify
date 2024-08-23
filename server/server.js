import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import jobRouter from "./routes/jobRouter.js";

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

// jobs routes
app.use("/api/v1/jobs", jobRouter);

// not found
app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: "not found" });
});

// error handler
app.use((err, req, res, next) => {
  console.log(err.message);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: "something went wrong" });
});

// base url
app.post("/", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
