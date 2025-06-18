import express from "express";
import {registerController, loginController} from "../controllers/authController.js";
import { forgotPassword, resetPassword } from "../controllers/passwordController.js";
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

// FORGOT PASSWORD || POST
router.post("/forgot-password", forgotPassword );

// RESET PASSWORD || POST

router.post("/reset-password/:token", resetPassword);

export default router;
