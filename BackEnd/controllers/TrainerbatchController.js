import TrainerBatch from "../models/TrainerBatch.js";

// Create a new trainer batch
export const createTrainerBatch = async (req, res) => {
  try {
    const trainerBatch = new TrainerBatch(req.body);
    await trainerBatch.save();
    res.status(201).json(trainerBatch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all trainer batches
export const getAllTrainerBatches = async (req, res) => {
  try {
    const trainerBatches = await TrainerBatch.find().populate("trainer").populate("batch");
    res.status(200).json(trainerBatches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single trainer batch by ID
export const getTrainerBatchById = async (req, res) => {
  try {
    const trainerBatch = await TrainerBatch.findById(req.params.id).populate("trainer").populate("batch");
    if (!trainerBatch) return res.status(404).json({ message: "TrainerBatch not found" });
    res.status(200).json(trainerBatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a trainer batch by ID
export const updateTrainerBatch = async (req, res) => {
  try {
    const trainerBatch = await TrainerBatch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!trainerBatch) return res.status(404).json({ message: "TrainerBatch not found" });
    res.status(200).json(trainerBatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a trainer batch by ID
export const deleteTrainerBatch = async (req, res) => {
  try {
    const trainerBatch = await TrainerBatch.findByIdAndDelete(req.params.id);
    if (!trainerBatch) return res.status(404).json({ message: "TrainerBatch not found" });
    res.status(200).json({ message: "TrainerBatch deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
