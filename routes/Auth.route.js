import { Router } from "express";
import { ForgotPasswordController, LoginController } from "../controllers/auth.controller.js";
import validateSchema from "../middlewares/validate.middleware.js";
import { LoginSchema } from "../utils/validations/Auth.js";



const router = Router();



router.post("/login", validateSchema(LoginSchema), LoginController);
router.post("/forgot-password", ForgotPasswordController);

export default router;