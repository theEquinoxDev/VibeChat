import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import path from "path";
import { app, server } from "./lib/socket.js";

// const app = express(); // using socket io so we dont' need this. 

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
}
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
  connectDB();
});
