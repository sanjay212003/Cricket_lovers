import express from "express";
import Placement from "../models/Placement.js";

const router = express.Router();

// POST: Save party registration
router.post("/register", async (req, res) => {
  try {
    const placement = new Placement(req.body);
    await placement.save();
    res.status(201).json({ message: "Registration saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save registration", error });
  }
});

export default router;
