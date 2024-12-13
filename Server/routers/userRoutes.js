import { Router } from 'express';
import {signin,signup} from "../controller/userController.js"

const router = Router();

// Signup Route
router.post('/signup', signup);

// Signin Route
router.post('/signin', signin);

export default router;
