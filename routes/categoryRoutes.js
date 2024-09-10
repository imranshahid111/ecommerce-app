import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  createCategoryController,
} from "./../controllers/createCategoryController.js";

const router = express.Router();

//routes
// create category
router.post( "/create-category", requireSignIn, isAdmin, createCategoryController );
export default router