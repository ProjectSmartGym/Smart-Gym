import Member from "../models/Member.js";

// @desc    Create a new member
// @route   POST /api/members
export const createMember = async (req, res) => {
  try {
    const { user, batch, membershipType, startDate, endDate, status, paymentStatus } = req.body;

    const newMember = new Member({
      user,
      batch,
      membershipType,
      startDate,
      endDate,
      status,
      paymentStatus,
    });

    await newMember.save();
    res.status(201).json({ message: "Member created successfully", member: newMember });
  } catch (error) {
    res.status(500).json({ message: "Error creating member", error: error.message });
  }
};

// @desc    Get all members
// @route   GET /api/members
export const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find().populate("user batch membershipType");
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: "Error fetching members", error: error.message });
  }
};

// @desc    Get a single member by ID
// @route   GET /api/members/:id
export const getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id).populate("user batch membershipType");

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: "Error fetching member", error: error.message });
  }
};

// @desc    Update a member
// @route   PUT /api/members/:id
export const updateMember = async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json({ message: "Member updated successfully", member: updatedMember });
  } catch (error) {
    res.status(500).json({ message: "Error updating member", error: error.message });
  }
};

// @desc    Delete a member
// @route   DELETE /api/members/:id
export const deleteMember = async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);

    if (!deletedMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting member", error: error.message });
  }
};
