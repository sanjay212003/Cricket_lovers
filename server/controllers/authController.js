import User from "../models/User.js";

export const login = async (req, res) => {
  try {
    let { phone, password } = req.body;

    // Basic validation
    if (!phone || !password) {
      return res.status(400).json({
        message: "Phone and password required"
      });
    }

    // Normalize phone number
    phone = phone.toString().replace(/\s+/g, "").replace("+91", "");

    // Validate common password
    if (password !== process.env.COMMON_PASSWORD) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    // Find user by normalized phone
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Success
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Server error"
    });
  }
};
