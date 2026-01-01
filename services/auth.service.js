import { User } from "../models/index.js";


const LoginService = async (email, password) => {

    let isEmail = await User.findOne({ where: { email: email } });
    if (!isEmail) {
        const error = new Error("Email does not exists");
        error.status = 404;
        throw error;
    }
    // password check
    if (isEmail.password !== password) { }
}



export { LoginService };