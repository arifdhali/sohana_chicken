import { Router } from "express";
import validateSchema from "../middlewares/validate.middleware.js";
import { CreateCustomerSchema } from "../utils/validations/Customer.js";
import { CustomerAddController } from "../controllers/customer.controller.js";


const route = Router();

route.post("/create", validateSchema(CreateCustomerSchema), CustomerAddController);

export default route;