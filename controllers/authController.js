import { comparePassword, hashPassword } from "../helpers/authHelper.js";
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
      return res.status(200).json({
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

export const loginController = async (req , res) =>{
  try {
    const {email , password} = req.body
    if(!email || !password)
    {
      return res.status(404).send({
        success: false,
        message:'Invalid Email or Password'
      })
    }
const user = await User.findOne({email})
if(!user){
  return res.status(404).send({
    success: false,
    message : 'Email is not registered'
  })
}
    const match = await comparePassword(password , user.password)
    if(!match){
      return res.status(200).send({
        success : false,
        message : 'Invalid password',
      })
    }
    const token  = await jwt.sign({_id: user._id}, process.env.JWT_SECRET,{
      expiresIn : "7d",
    }); 
    res.status(200).send({
      success : true,
      message : 'login Successful',
      user:{
        name: user.name,
        email : user.email,
        phone : user.phone,
        address : user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message : 'Error in login',
      error
    })
  }

}

export const testController = (req , res) =>{
res.send("protected")};