import mongoose from "mongoose";

const placementSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    roomNumber: { type: String, required: true },
    company: { type: String, required: true },
    band: { type: String, required: true },
    packageCTC: { type: Number, required: true },
    partyDate: { type: Date, required: true },
    isCricketMember: { type: String, required: true },
    isHosteller: { type: String, required: true },
    isGettingFacilities: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Placement", placementSchema);
