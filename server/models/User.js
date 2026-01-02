import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,   // 🔴 MUST be String
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: "member"
  }
});

export default mongoose.model("User", userSchema);
