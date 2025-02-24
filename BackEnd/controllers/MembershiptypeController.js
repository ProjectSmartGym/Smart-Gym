
import MembershipType from "../models/MembershipTypemodel.js";

// Create a new membership type
export const createMembership = async (req, res) => {
  try {
    const { name, price, duration, benefits } = req.body;
    const newMembership = new MembershipType({ name, price, duration, benefits });

    await newMembership.save();
    res.status(201).json({ success: true, message: "Membership type created successfully", data: newMembership });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all membership types
export const getMemberships = async (req, res) => {
  try {
    const memberships = await MembershipType.find();
    res.status(200).json({ success: true, data: memberships });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single membership type by ID
export const getMembershipById = async (req, res) => {
  try {
    const membership = await MembershipType.findById(req.params.id);
    if (!membership) {
      return res.status(404).json({ success: false, message: "Membership type not found" });
    }
    res.status(200).json({ success: true, data: membership });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a membership type by ID
export const updateMembership = async (req, res) => {
  try {
    const updatedMembership = await MembershipType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMembership) {
      return res.status(404).json({ success: false, message: "Membership type not found" });
    }
    res.status(200).json({ success: true, message: "Membership updated successfully", data: updatedMembership });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a membership type by ID
export const deleteMembership = async (req, res) => {
  try {
    const deletedMembership = await MembershipType.findByIdAndDelete(req.params.id);
    if (!deletedMembership) {
      return res.status(404).json({ success: false, message: "Membership type not found" });
    }
    res.status(200).json({ success: true, message: "Membership deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};