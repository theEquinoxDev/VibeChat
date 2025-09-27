import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { config } from "dotenv";

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token) {
            return res.status(401).json({message: "Unauthorized "});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({message: "Unauthorized"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user) {
            return res.status(404).json({message: "User Not Found"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Error in Verifying the user");
        res.status(500).json({message: "Internal Server Error"});
        
    }
}