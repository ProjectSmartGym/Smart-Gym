import mongoose from "mongoose";

const membershipTypeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }, // Duration in days
    benefits: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("MembershipType", membershipTypeSchema);
