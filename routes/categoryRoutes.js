import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  Category,
  createCategoryController,
  DeleteCategory,
  SingleCategory,
  updateCategoryController,
} from "./../controllers/createCategoryController.js";

const router = express.Router();

//routes
// create category
router.post( "/create-category", requireSignIn, isAdmin, createCategoryController );

router.put("/update-category/:id" , requireSignIn, isAdmin, updateCategoryController );

router.get("/get-category" , Category);

router.get("/single-category/:slug" , SingleCategory);

router.delete("/delete-category/:id", requireSignIn, isAdmin ,DeleteCategory);

export default router