import express from "express";
import {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
} from "../controllers/MemberController.js";

const router = express.Router();

router.post("/", createMember); // Create a new member
router.get("/", getAllMembers); // Get all members
router.get("/:id", getMemberById); // Get a single member by ID
router.put("/:id", updateMember); // Update a member
router.delete("/:id", deleteMember); // Delete a member

export default router;
