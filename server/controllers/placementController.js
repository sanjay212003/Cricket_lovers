import Placement from "../models/Placement.js";

export const registerPlacement = async (req, res) => {
  try {
    const { name, phone, email, company, band } = req.body;

    if (!name || !phone || !email || !company || !band) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let partyLocation = "";

    if (band === "Band 1") partyLocation = "Hotel 1";
    if (band === "Band 2") partyLocation = "Hostel 2";
    if (band === "Band 3") partyLocation = "Hotel 3";

    const placement = new Placement({
      name,
      phone,
      email,
      company,
      band,
      partyLocation
    });

    await placement.save();

    res.status(201).json({
      message: "🎉 Placement registered successfully",
      placement
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

export const getAllPlacements = async (req, res) => {
  try {
    const placements = await Placement.find().sort({ createdAt: -1 });
    res.status(200).json(placements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
