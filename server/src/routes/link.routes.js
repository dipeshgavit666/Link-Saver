import { Router } from "express";
import { Link } from "../models/link.model.js";

const router = Router();

router.post("/link", async (req, res) => {
  const { url, title, tag } = req.body;
  try {
    const link = await Link.create({ url, title, tag });
    res.status(200).json({ link, message: "link saved successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/link", async (req, res) => {
  const tag = req.query.tag;
  const query = tag ? { tag } : {};
  try {
    const links = await Link.find(query);
    res.status(200).json({ links, message: "links fetched successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/link/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const link = await Link.findByIdAndDelete(id);
    res.status(200).json({ link, message: "link deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
