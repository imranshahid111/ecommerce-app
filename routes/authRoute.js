import express from "express";
import {registerController} from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js";
const router = express.Router()
router.post('/register', registerController)



router.post('Login', loginController)


export default router;
