

import express from "express";
import {
  createMembership,
  getMemberships,
  getMembershipById,
  updateMembership,
  deleteMembership,
} from "../controllers/MembershiptypeController.js";

const router = express.Router();

router.post("/", createMembership);
router.get("/", getMemberships);
router.get("/:id", getMembershipById);
router.put("/:id", updateMembership);
router.delete("/:id", deleteMembership);

export default router;