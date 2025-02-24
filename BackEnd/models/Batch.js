import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
  {
    batchName: { type: String, required: true, unique: true },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer", required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    days: [{ type: String, required: true }],
    maxCapacity: { type: Number, required: true },
  },
  { timestamps: true }
);

const Batch = mongoose.model("Batch", batchSchema);
export default Batch;
