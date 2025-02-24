import Trainer from "../models/Trainer.js";

export const createTrainer = async (req, res) => {
  try {
    const { name, email, phone, specialization, experience, availableSlots } = req.body;

    const newTrainer = new Trainer({
      name,
      email,
      phone,
      specialization,
      experience,
      availableSlots,
    });

    await newTrainer.save();
    res.status(201).json({ message: "Trainer created successfully", trainer: newTrainer });
  } catch (error) {
    res.status(500).json({ message: "Error creating trainer", error: error.message });
  }
};

export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trainers", error: error.message });
  }
};

export const getTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    res.status(200).json(trainer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trainer", error: error.message });
  }
};

export const updateTrainer = async (req, res) => {
  try {
    const updatedTrainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedTrainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    res.status(200).json({ message: "Trainer updated successfully", trainer: updatedTrainer });
  } catch (error) {
    res.status(500).json({ message: "Error updating trainer", error: error.message });
  }
};

export const deleteTrainer = async (req, res) => {
  try {
    const deletedTrainer = await Trainer.findByIdAndDelete(req.params.id);

    if (!deletedTrainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    res.status(200).json({ message: "Trainer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting trainer", error: error.message });
  }
};
