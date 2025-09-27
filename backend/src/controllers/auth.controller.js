import { z } from "zod";
import { signupSchema } from "../schemas/auth.schema.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
  try {
    const validatedData = signupSchema.parse(req.body);
    const { fullName, email, password } = validatedData;

     if(!email || !password) {
    return res.status(400).json({message: "Email and password are required!"});
  }
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

   const newUser = await User.create({ fullName, email,  password: hashedPassword });

   if(newUser) {
    generateToken(newUser._id, res);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic
      },
    });
   } else {
    return res.status(400).json({message: "Invalid user data"})
   }

  } catch (error) {
  if (error instanceof z.ZodError) {
    return res.status(400).json({
      errors: error.issues.map(e => ({
        field: e.path[0],
        message: e.message
      })),
    });
  }

  console.log("Error in signup controller", error);
  res.status(500).json({ message: "Internal Server Error" });
}
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({message: "Email and password are required!"});
  }
  try {
    const user = await User.findOne({email});
    if(!user) {
      return res.status(400).json({message: "Invalid Credentials"});
    }
    const isPassword = await bcrypt.compare(password, user.password)
    if(!isPassword) {
      return res.status(400).json({message: "Invalid Credentials"})
    }
    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic
    })
  } catch (error) {
    console.error("error in login controller", error);
    res.status(500).json({message: "Internal Server Error"});
    
  }
};

export const logout =  (req, res) => {
  res.cookie("jwt","", {maxAge: 0});
  res.status(200).json({message: "Logged Out Successfully"});
};

export const updateProfile = async (req , res) => {
  try {
    const { profilePic } = req.body;
    if(!profilePic) {
      return res.status(400).json({message: "No Profile Pic uploaded"});
    }
    const userId = req.user._id;

  const response =  await cloudinary.uploader.upload(profilePic);

    const updatedUser =  await User.findByIdAndUpdate(userId, {profilePic: response.secure_url}, {new: true});

    res.status(200).json(updatedUser)
  } catch (error) {
    console.log("Error in update Profile", error);
    res.status(500).json({message: "Internal Server Error"})
     
  }
}

