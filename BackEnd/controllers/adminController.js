// controllers/adminController.js

import Admin from '../models/Admin.js';
import dotenv from 'dotenv';

dotenv.config();

// Generate JWT Token
const generateToken = (admin) => {
  return jwt.sign(
    { id: admin._id, email: admin.email, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Register Admin
export const registerAdmin = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber, profilePic } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

    const newAdmin = new Admin({ fullName, email, password, phoneNumber, profilePic });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login Admin
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = generateToken(admin);
    res.status(200).json({ token, admin });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get Admin Profile
export const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update Admin Profile
export const updateAdminProfile = async (req, res) => {
  try {
    const updates = req.body;
    updates.updatedAt = Date.now();

    const updatedAdmin = await Admin.findByIdAndUpdate(req.admin.id, updates, { new: true, runValidators: true }).select('-password');
    if (!updatedAdmin) return res.status(404).json({ message: 'Admin not found' });

    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete Admin
export const deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.admin.id);
    if (!deletedAdmin) return res.status(404).json({ message: 'Admin not found' });

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
