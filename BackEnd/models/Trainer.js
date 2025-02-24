import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    availableSlots: [
      {
        day: { type: String, required: true },
        time: { type: String, required: true },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Trainer = mongoose.model("Trainer", trainerSchema);
export default Trainer;
