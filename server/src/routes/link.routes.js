import { Router } from "express";
import { Link } from "../models/Link.model.js";

const router = Router();

router.post("/link", async (req, res) => {
  const link = req.body;
  if (!link) {
    console.error("URL data is required");
  }
  await Link.save(link);
  res.status(200).json({ link, message: "link saved successfully" });
});

router.get("/link", (req, res) => {
  res.status(200).json({ status: "ok" });
});

router.get("/link/:id", (req, res) => {
  res.status(200).json({ status: "ok" });
});

router.delete("/link/:id", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default router;
