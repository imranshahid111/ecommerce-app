import { hashPassword } from "../helpers/authHelper.js";
import User from "../models/user.js";
import jwt from 'jsonwebtoken'
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already registered',
      });
    }

  
    const hashedPassword = await hashPassword(password);

    
    const user = new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });
    await user.save();
  

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user,
    });

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({
      success: false,
      message: 'Error in registration',
      error: error.message,
    });
  }
};

export const loginController = () =>{
  
}