import Placement from "../models/Placement.js";

export const registerPlacement = async (req, res) => {
  try {
    console.log("➡️ Incoming data:", req.body);

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

    // Validation
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
      return res.status(400).json({ message: "All fields are required" });
    }

    const placement = new Placement({
      name,
      email,
      roomNumber,
      company,
      band,
      packageCTC: Number(packageCTC),      // ✅ FIX
      partyDate: new Date(partyDate),      // ✅ FIX
      isCricketMember,
      isHosteller,
      isGettingFacilities
    });

    const savedPlacement = await placement.save();

    console.log("✅ Placement saved:", savedPlacement);

    res.status(201).json({
      message: "🎉 Placement registered successfully",
      data: savedPlacement
    });
  } catch (error) {
    console.error("❌ Placement save failed:", error);
    res.status(500).json({ message: error.message });
  }
};
