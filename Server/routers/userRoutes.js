import { Router } from 'express';
import {signin,signup,sendMail} from "../controller/userController.js"

const router = Router();

// Signup Route
router.post('/signup', signup);

// Signin Route
router.post('/signin', signin);

router.post('/send-mail',sendMail)

export default router;
