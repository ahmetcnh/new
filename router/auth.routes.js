import express from "express";
import { login } from "../controller/login.js";
import { register } from "../controller/register.js";
import { authValidation } from "../validation/auth.validation.js";

const router = express.Router();

router.post("/login", authValidation.login, login);
router.post("/register", authValidation.register, register);

export default router;