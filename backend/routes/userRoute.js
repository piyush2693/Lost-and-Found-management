import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs/promises"; 

dotenv.config();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Local storage (temporary)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  // 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

import { foundReport, lostReport } from "../controllers/reportItem.js";
import { getLostItems, getFoundItems } from "../controllers/getItems.js"

const router = express.Router();


async function uploadToCloudinary(req, res, next) {
  if (!req.file) return next();

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "found-items",
      allowed_formats: ["jpg", "jpeg", "png"],
    });

    req.file.cloudinaryUrl = result.secure_url;

    await fs.unlink(req.file.path); // delete local file after upload
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cloudinary upload failed" });
  }
}

router.post("/found-report", upload.single("image"), uploadToCloudinary, foundReport);
router.post("/lost-report", upload.single("image"), uploadToCloudinary, lostReport);


router.get("/lost-items", getLostItems);
router.get("/found-items", getFoundItems);

export default router;