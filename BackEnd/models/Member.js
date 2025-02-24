import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", required: true },
    membershipType: { type: mongoose.Schema.Types.ObjectId, ref: "MembershipType", required: true }, // External reference
    startDate: { type: Date, required: true, default: Date.now },
    endDate: { type: Date, required: true }, // Membership expiration date
    status: { type: String, enum: ["active", "expired", "cancelled"], default: "active" },
    paymentStatus: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);
export default Member;
