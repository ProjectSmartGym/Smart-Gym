  import mongoose from "mongoose";

  const exerciseSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      category: { type: String, required: true },
      difficulty: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
      trainer: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer" },
      equipment: { type: String, default: "Bodyweight" },
      description: { type: String, required: true },
      duration: { type: Number, default: 30 },
      repetitions: { type: Number, default: 10 },
      sets: { type: Number, default: 3 },
      videoUrl: { type: String },
    },
    { timestamps: true }
  );

  const Exercise = mongoose.model("Exercise", exerciseSchema);
  export default Exercise;
