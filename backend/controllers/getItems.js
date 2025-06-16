import FoundItem from "../models/foundItem.js";
import LostItem from "../models/lostItem.js";
// GET /api/found-items
export const getFoundItems = async (req, res) => {
  try {
    const items = await FoundItem.find();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching found items:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


export const getLostItems = async (req, res) => {
  try {
    const items = await LostItem.find();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching found items:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

