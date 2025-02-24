import mongoose from "mongoose";

const memberAttendanceSchema = new mongoose.Schema(
  {
    member: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
    batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", required: true },
    date: { type: Date, required: true, default: Date.now },
    status: { type: String, enum: ["present", "absent", "leave"], required: true },
    remarks: { type: String },
  },
  { timestamps: true }
);

const MemberAttendance = mongoose.model("MemberAttendance", memberAttendanceSchema);
export default MemberAttendance;
