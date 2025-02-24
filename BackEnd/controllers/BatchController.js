import Batch from "../models/Batch.js";

// @desc    Create a new batch
// @route   POST /api/batches
export const createBatch = async (req, res) => {
  try {
    const { batchName, trainer, startTime, endTime, days, maxCapacity } = req.body;

    const newBatch = new Batch({
      batchName,
      trainer,
      startTime,
      endTime,
      days,
      maxCapacity,
    });

    await newBatch.save();
    res.status(201).json({ message: "Batch created successfully", batch: newBatch });
  } catch (error) {
    res.status(500).json({ message: "Error creating batch", error: error.message });
  }
};

// @desc    Get all batches
// @route   GET /api/batches
export const getAllBatches = async (req, res) => {
  try {
    const batches = await Batch.find().populate("trainer");
    res.status(200).json(batches);
  } catch (error) {
    res.status(500).json({ message: "Error fetching batches", error: error.message });
  }
};

// @desc    Get a single batch by ID
// @route   GET /api/batches/:id
export const getBatchById = async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id).populate("trainer");

    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }

    res.status(200).json(batch);
  } catch (error) {
    res.status(500).json({ message: "Error fetching batch", error: error.message });
  }
};

// @desc    Update a batch
// @route   PUT /api/batches/:id
export const updateBatch = async (req, res) => {
  try {
    const updatedBatch = await Batch.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedBatch) {
      return res.status(404).json({ message: "Batch not found" });
    }

    res.status(200).json({ message: "Batch updated successfully", batch: updatedBatch });
  } catch (error) {
    res.status(500).json({ message: "Error updating batch", error: error.message });
  }
};

// @desc    Delete a batch
// @route   DELETE /api/batches/:id
export const deleteBatch = async (req, res) => {
  try {
    const deletedBatch = await Batch.findByIdAndDelete(req.params.id);

    if (!deletedBatch) {
      return res.status(404).json({ message: "Batch not found" });
    }

    res.status(200).json({ message: "Batch deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting batch", error: error.message });
  }
};
