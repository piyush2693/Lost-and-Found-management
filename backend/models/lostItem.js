import mongoose from "mongoose";

const lostItemSchema = new mongoose.Schema({
  image: String,
  category: String,
  description: String,
  dateLost: Date,
  lostLocation: String,
  owner: String,
  contact: Number,
  roll: String,
},
{ timestamps: true }
);

export default mongoose.model("LostItem", lostItemSchema);
