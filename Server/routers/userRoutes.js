import { Router } from "express";
import {
  signin,
  signup,
  sendMail,
  sendDoc,
} from "../controller/userController.js";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// Signup Route
router.post("/signup", signup);

// Signin Route
router.post("/signin", signin);

router.post("/send-mail", sendMail);

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir), // Upload folder
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Send Document Route
router.post("/send-doc", upload.single("document"), sendDoc);

export default router;
