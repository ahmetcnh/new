import express from "express";
const router = express.Router();
import auth from "./auth.routes.js"

router.use(auth)

export default router;