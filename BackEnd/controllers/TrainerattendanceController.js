import TrainerAttendance from "../models/TrainerAttendance.js";

// Create a new trainer attendance record
export const createTrainerAttendance = async (req, res) => {
    try {
        const { trainer, batch, date, status, remarks } = req.body;

        const newAttendance = new TrainerAttendance({ trainer, batch, date, status, remarks });
        await newAttendance.save();

        res.status(201).json(newAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all trainer attendance records
export const getAllTrainerAttendance = async (req, res) => {
    try {
        const attendanceRecords = await TrainerAttendance.find().populate("trainer batch");
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single trainer attendance record by ID
export const getTrainerAttendanceById = async (req, res) => {
    try {
        const attendance = await TrainerAttendance.findById(req.params.id).populate("trainer batch");
        if (!attendance) return res.status(404).json({ message: "Attendance record not found" });

        res.status(200).json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update trainer attendance by ID
export const updateTrainerAttendance = async (req, res) => {
    try {
        const updatedAttendance = await TrainerAttendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAttendance) return res.status(404).json({ message: "Attendance record not found" });

        res.status(200).json(updatedAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete trainer attendance by ID
export const deleteTrainerAttendance = async (req, res) => {
    try {
        const deletedAttendance = await TrainerAttendance.findByIdAndDelete(req.params.id);
        if (!deletedAttendance) return res.status(404).json({ message: "Attendance record not found" });

        res.status(200).json({ message: "Attendance record deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
