import Exercise from "../models/Exercise.js";

// Create a new exercise
export const createExercise = async (req, res) => {
  try {
    const { name, category, difficulty, trainer, equipment, description, duration, repetitions, sets, videoUrl } = req.body;
    
    const newExercise = new Exercise({
      name,
      category,
      difficulty,
      trainer,
      equipment,
      description,
      duration,
      repetitions,
      sets,
      videoUrl
    });

    await newExercise.save();
    res.status(201).json({ message: "Exercise created successfully", exercise: newExercise });
  } catch (error) {
    res.status(500).json({ message: "Error creating exercise", error: error.message });
  }
};

// Get all exercises
export const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find().populate("trainer");
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercises", error: error.message });
  }
};

// Get an exercise by ID
export const getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id).populate("trainer");

    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercise", error: error.message });
  }
};

// Update an exercise
export const updateExercise = async (req, res) => {
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedExercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.status(200).json({ message: "Exercise updated successfully", exercise: updatedExercise });
  } catch (error) {
    res.status(500).json({ message: "Error updating exercise", error: error.message });
  }
};

// Delete an exercise
export const deleteExercise = async (req, res) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(req.params.id);

    if (!deletedExercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting exercise", error: error.message });
  }
};
