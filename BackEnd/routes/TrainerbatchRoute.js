import express from "express";
import {
  createTrainerBatch,
  getAllTrainerBatches,
  getTrainerBatchById,
  updateTrainerBatch,
  deleteTrainerBatch
} from "../controllers/TrainerbatchController.js";

const router = express.Router();

router.post("/", createTrainerBatch);
router.get("/", getAllTrainerBatches);
router.get("/:id", getTrainerBatchById);
router.put("/:id", updateTrainerBatch);
router.delete("/:id", deleteTrainerBatch);

export default router;
