import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { updateProfile } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/updateProfile", authMiddleware, updateProfile); 

router.get("/verify", authMiddleware, (req, res) => res.status(200).json(req.user) )



export default router;