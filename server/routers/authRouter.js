import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
});

export default router;
