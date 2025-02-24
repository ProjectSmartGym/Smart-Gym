import MemberAttendance from "../models/MemberAttendance.js";

// Create a new attendance record
export const createAttendance = async (req, res) => {
  try {
    const { member, batch, date, status, remarks } = req.body;

    const newAttendance = new MemberAttendance({
      member,
      batch,
      date,
      status,
      remarks
    });

    await newAttendance.save();
    res.status(201).json({ message: "Attendance recorded successfully", attendance: newAttendance });
  } catch (error) {
    res.status(500).json({ message: "Error recording attendance", error: error.message });
  }
};

// Get all attendance records
export const getAllAttendances = async (req, res) => {
  try {
    const attendances = await MemberAttendance.find()
      .populate("member")
      .populate("batch");
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance records", error: error.message });
  }
};

// Get attendance by ID
export const getAttendanceById = async (req, res) => {
  try {
    const attendance = await MemberAttendance.findById(req.params.id)
      .populate("member")
      .populate("batch");

    if (!attendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance", error: error.message });
  }
};

// Update attendance status
export const updateAttendance = async (req, res) => {
  try {
    const updatedAttendance = await MemberAttendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAttendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }

    res.status(200).json({ message: "Attendance updated successfully", attendance: updatedAttendance });
  } catch (error) {
    res.status(500).json({ message: "Error updating attendance", error: error.message });
  }
};

// Delete attendance record
export const deleteAttendance = async (req, res) => {
  try {
    const deletedAttendance = await MemberAttendance.findByIdAndDelete(req.params.id);

    if (!deletedAttendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }

    res.status(200).json({ message: "Attendance deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting attendance", error: error.message });
  }
};
