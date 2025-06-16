import mongoose from "mongoose";

const foundItemSchema = new mongoose.Schema({
  image: String,
  category: String,
  description: String,
  dateFound: Date,
  foundLocation: String,
  foundBy: String,
  contact: Number,
  roll: String,
},
{ timestamps: true }
);

export default mongoose.model("FoundItem", foundItemSchema);
