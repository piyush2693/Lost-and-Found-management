import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/authHelper.js";
import JWT from "jsonwebtoken";

// REGISTER CONTROLLER
export const registerController = async (req, res) => {
  try {
    const { name, email, password, roll, phone } = req.body;

    // Basic Validation (can be replaced later with JOI or express-validator)
    if (!name || !email || !password || !roll || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered. Please login.",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const user = await new userModel({
      name,
      email,
      phone,
      roll,
      password: hashedPassword,
    }).save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        roll: user.roll,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
    });
  }
};

// LOGIN CONTROLLER
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required!!!",
      });
    }

    // Check user existence
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email is not registered!!!",
      });
    }

    // Compare passwords
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password!!!",
      });
    }

    // Generate token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Login successfully!!!",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        roll: user.roll,
      },
      token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Error during login",
    });
  }
};


