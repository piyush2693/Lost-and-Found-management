import FoundItem from "../models/foundItem.js";
import LostItem from "../models/lostItem.js";

// FOUND REPORT
export const foundReport = async (req, res) => {
  try {
    const imageUrl = req.file?.cloudinaryUrl || null;

    if (!imageUrl) {
      return res.status(400).json({ error: "Image upload failed" });
    }

    const newItem = new FoundItem({
      image: imageUrl,
      category: req.body.category,
      description: req.body.description,
      dateFound: req.body.dateFound,
      foundLocation: req.body.foundLocation,
      foundBy: req.body.foundBy,
      contact: req.body.contact,
      roll: req.body.roll,
    });

    await newItem.save();
    res.status(201).json({ message: "Found item reported successfully", item: newItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while reporting found item" });
  }
};

// LOST REPORT
export const lostReport = async (req, res) => {
  try {
    const imageUrl = req.file?.cloudinaryUrl || null;

    if (!imageUrl) {
      return res.status(400).json({ error: "Image upload failed" });
    }

    const newItem = new LostItem({
      image: imageUrl,
      category: req.body.category,
      description: req.body.description,
      dateLost: req.body.dateLost,
      lostLocation: req.body.lostLocation,
      owner: req.body.owner,
      contact: req.body.contact,
      roll: req.body.roll,
    });

    await newItem.save();
    res.status(201).json({ message: "Lost item reported successfully", item: newItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while reporting lost item" });
  }
};
