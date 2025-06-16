import FoundItem from "../models/foundItem.js";
import LostItem from "../models/lostItem.js";

export const foundReport = async (req, res) => {
  try {
    console.log("Request Body: ", req.body);
    console.log("Request File: ", req.file);

    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "Image file is missing" });
    }

    const imageUrl = file.path;  
    console.log("image_URL : " + imageUrl);
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
    console.log(newItem);
    await newItem.save();

    res.status(201).json({ message: "Item reported successfully", item: newItem });

  } catch (error) {
    console.error("Error while saving Found Item:", error);
    res.status(500).json({ error: "Server Error" });
  }
};


export const lostReport = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "Image file is missing" });
    }

    const imageUrl = file.path;
    console.log("Image URL: " + imageUrl);

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

    console.log(newItem);
    await newItem.save();

    res.status(201).json({ message: "Lost Item reported successfully", item: newItem });

  } catch (error) {
    console.error("Error while saving Lost Item:", error);
    res.status(500).json({ error: "Server Error" });
  }
};





