import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import jobRouter from "./routes/jobRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5100;

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());
app.listen(port, () => {
  console.log(`server running on PORT ${port}....`);
});

// jobs routes
app.use("/api/v1/jobs", jobRouter);

// not found
app.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

// error handler
app.use((err, req, res, next) => {
  console.log(err.status, err.message);
  res.status(500).json({ message: "something went wrong" });
});

// base url
app.post("/", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
