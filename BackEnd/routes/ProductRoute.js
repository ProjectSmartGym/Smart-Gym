import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

// Product Routes
router.post("/", createProduct);       // Create a new product
router.get("/", getAllProducts);       // Get all products
router.get("/:id", getProductById);    // Get a product by ID
router.put("/:id", updateProduct);     // Update a product by ID
router.delete("/:id", deleteProduct);  // Delete a product by ID

export default router;