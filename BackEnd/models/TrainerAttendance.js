import mongoose from "mongoose";

const trainerAttendanceSchema = new mongoose.Schema(
  {
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer", required: true }, // Trainer Reference
    batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", required: true }, // Batch Reference
    date: { type: Date, required: true, default: Date.now }, // Attendance Date
    status: { type: String, enum: ["present", "absent", "leave"], required: true }, // Attendance Status
    remarks: { type: String }, // Optional Notes for Leave/Absence
  },
  { timestamps: true }
);

const TrainerAttendance = mongoose.model("TrainerAttendance", trainerAttendanceSchema);
export default TrainerAttendance;
