import express from "express";
import { registerPlacement } from "../controllers/placementController.js";

const router = express.Router();

router.post("/register", (req, res, next) => {
  console.log("🔥 /api/placements/register ROUTE HIT");
  next();
}, registerPlacement);

export default router;
