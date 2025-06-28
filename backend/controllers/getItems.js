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

// search found product
export const searchFoundItemsController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const resutls = await FoundItem.find({
      $or: [
        { category: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    });

    res.json(resutls);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In Search Item API",
      error,
    });
  }
};
// search lost product
export const searchLostItemsController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const resutls = await LostItem.find({
      $or: [
        { category: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    });

    res.json(resutls);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In Search Item API",
      error,
    });
  }
};