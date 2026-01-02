import Placement from "../models/Placement.js";

export const registerPlacement = async (req, res) => {
  try {
    const {
      name,
      email,
      roomNumber,
      company,
      band,
      packageCTC,
      partyDate,
      isCricketMember,
      isHosteller,
      isGettingFacilities
    } = req.body;

    // Validate all fields
    if (
      !name ||
      !email ||
      !roomNumber ||
      !company ||
      !band ||
      !packageCTC ||
      !partyDate ||
      !isCricketMember ||
      !isHosteller ||
      !isGettingFacilities
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Decide party location based on band
    let partyLocation = "";
    if (band === "Band 1") partyLocation = "Naidu";
    else if (band === "Band 2") partyLocation = "Meghana's";
    else if (band === "Band 3") partyLocation = "Star Hotel";

    const placement = new Placement({
      name,
      email,
      roomNumber,
      company,
      band,
      packageCTC,
      partyDate,
      isCricketMember,
      isHosteller,
      isGettingFacilities,
      partyLocation
    });

    const savedPlacement = await placement.save();

    console.log("✅ Placement saved:", savedPlacement);

    return res.status(201).json({
      message: "🎉 Placement registered successfully",
      placement: savedPlacement
    });
  } catch (error) {
    console.error("❌ Placement save error:", error);
    return res.status(500).json({
      message: "Server error"
    });
  }
};

export const getAllPlacements = async (req, res) => {
  try {
    const placements = await Placement.find().sort({ createdAt: -1 });
    return res.status(200).json(placements);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch placements"
    });
  }
};
