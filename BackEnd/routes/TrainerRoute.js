import express from "express";
import { createTrainer, getAllTrainers, getTrainerById, updateTrainer, deleteTrainer } from "../controllers/TrainerController.js"

const router = express.Router();

router.post("/", createTrainer);
router.get("/", getAllTrainers);
router.get("/:id", getTrainerById);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);

export default router;
