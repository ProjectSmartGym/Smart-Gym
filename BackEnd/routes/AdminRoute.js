// routes/adminRoutes.js

import express from "express";
import {
     registerAdmin,
     loginAdmin,
     getAllAdmins,
     getAdminById,
     updateAdmin,
     deleteAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

// Register
router.post("/", registerAdmin);

// Login
router.post("/", loginAdmin);

// Get all admins
router.get("/", getAllAdmins);

// Get admin by ID
router.get("/:id", getAdminById);

// Update admin
router.put("/:id", updateAdmin);

// Delete admin
router.delete("/:id", deleteAdmin);

export default router;
