import { ForgotPasswordService, LoginService } from "../services/auth.service.js";
import { success } from "../utils/response.js";


const LoginController = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        let data = await LoginService(email, password);
        return success(res, data, "Login successful", 200);

    } catch (error) {
        next(error);
    }

}

const ForgotPasswordController = async (req, res, next) => {

    try {

        const { email } = req.body;
        await ForgotPasswordService(email);
        
    } catch (error) {
        next(error);
    }


}


export { LoginController, ForgotPasswordController };