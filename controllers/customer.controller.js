import { CustomerAddService } from "../services/customer.service.js";
import { success } from "../utils/response.js";


const CustomerAddController = async (req, res, next) => {

    try {



        let data = await CustomerAddService(req.body);

        return success(res, data, "Customer created successfully", 201);


    } catch (error) {
        next(error);
    }



};
export { CustomerAddController };