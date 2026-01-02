import User from "../models/User.js";

export const login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    // Basic validation
    if (!phone || !password) {
      return res.status(400).json({ message: "Phone and password required" });
    }

    // Check common password
    if (password !== process.env.COMMON_PASSWORD) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Find user by phone number
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Success
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
