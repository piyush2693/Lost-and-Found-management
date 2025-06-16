import express from "express";
import multer from "multer";

import cloudinary from "../config/cloudinaryConfig.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";



// Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "found-items",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage: storage });

import { foundReport, lostReport } from "../controllers/reportItem.js";
import { getLostItems, getFoundItems } from "../controllers/getItems.js"
const router = express.Router();

router.post("/found-report", upload.single("image"), foundReport);
router.post("/lost-report", upload.single("image"), lostReport);


router.get("/lost-items", upload.single("image"), getLostItems);
router.get("/found-items", upload.single("image"), getFoundItems);


export default router;
