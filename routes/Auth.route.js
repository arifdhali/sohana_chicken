import { Router } from "express";
import { LoginController } from "../controllers/auth.controller.js";
import validateSchema from "../middlewares/validate.middleware.js";
import { LoginSchema } from "../utils/validations/Auth.js";


const router = Router();



router.post("/login", validateSchema(LoginSchema), LoginController);

export default router;