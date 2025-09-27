import express from "express";
import { getAllContacts, getChatPartners } from "../controllers/message.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getMessagesByUserId } from "../controllers/message.controller.js";
import { sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/contacts", authMiddleware, getAllContacts);
router.get("/chats", authMiddleware, getChatPartners);
router.get("/:id", authMiddleware, getMessagesByUserId); 
router.post("/send/:id", authMiddleware, sendMessage);

export default router;
    