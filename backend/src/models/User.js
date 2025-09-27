import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    fullName: {
        type: String,
        required: true
    }, 
    password: {
        type: String, 
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
}, {timestamps: true}) // createdAt & updatedAt


const User = mongoose.model("User", userschema)

export default User