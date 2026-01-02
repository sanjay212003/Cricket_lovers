import Placement from "../models/Placement.js";

export const registerPlacement = async (req, res) => {
  try {
    console.log("Incoming placement data:", req.body);

    const placement = new Placement(req.body);

    const saved = await placement.save();

    console.log("Placement SAVED in DB:", saved);

    return res.status(201).json({
      message: "Placement saved successfully",
      data: saved
    });
  } catch (error) {
    console.error("Placement save FAILED:", error);
    return res.status(500).json({
      message: "Placement save failed",
      error: error.message
    });
  }
};
