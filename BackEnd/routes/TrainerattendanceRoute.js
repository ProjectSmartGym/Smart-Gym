import express from "express";
import {
    createTrainerAttendance,
    getAllTrainerAttendance,
    getTrainerAttendanceById,
    updateTrainerAttendance,
    deleteTrainerAttendance
} from "../controllers/TrainerattendanceController.js";

const router = express.Router();

router.post("/", createTrainerAttendance);
router.get("/", getAllTrainerAttendance);
router.get("/:id", getTrainerAttendanceById);
router.put("/:id", updateTrainerAttendance);
router.delete("/:id", deleteTrainerAttendance);

export default router;
