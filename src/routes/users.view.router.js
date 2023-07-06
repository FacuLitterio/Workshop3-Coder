import { Router } from "express";
import { loginView, registerView } from "../controllers/users.controller.js";

const router = Router();

router.get("/login", loginView);

router.get("/register", registerView);

export default router;
