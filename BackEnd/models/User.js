  // models/User.js
  import mongoose from 'mongoose';

  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // other fields
  });

  const User = mongoose.model("User", userSchema);

  export default User;
