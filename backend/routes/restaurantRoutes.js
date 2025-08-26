import express from "express";
import multer from "multer";
import path from "path";
import { registerRestaurant } from "../controllers/restaurantController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.post(
  "/register",
  upload.fields([
    { name: "restaurantImage" },
    { name: "panCard" },
    { name: "fssaiLicense" },
    { name: "bankDetails" },
    { name: "menuImage" },
  ]),
  registerRestaurant
);

export default router;