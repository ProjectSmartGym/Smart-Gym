import express from "express";
import {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance
} from "../controllers/MemberattendanceController.js";

const router = express.Router();

router.post("/", createAttendance);
router.get("/", getAllAttendances);
router.get("/:id", getAttendanceById);
router.put("/:id", updateAttendance);
router.delete("/:id", deleteAttendance);

export default router;
