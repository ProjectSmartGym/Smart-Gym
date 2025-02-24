import mongoose from "mongoose";

const trainerBatchSchema = new mongoose.Schema(
  {
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer", required: true },
    batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", required: true },
    startDate: { type: Date, required: true, default: Date.now },
    endDate: { type: Date },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

const TrainerBatch = mongoose.model("TrainerBatch", trainerBatchSchema);
export default TrainerBatch;
