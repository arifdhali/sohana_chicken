import bcrypt from "bcryptjs";
import { User } from "../models/index.js";
import jwt from "jsonwebtoken";
const LoginService = async (email, password) => {


    let isUser = await User.findOne({ where: { email: email } });
    if (!isUser) {
        const error = new Error("Email does not exists");
        error.status = 401;
        throw error;
    }

    let compare_password = await bcrypt.compare(password, isUser.password);
    if (!compare_password) {
        const error = new Error("Password is incorrect");
        error.status = 401;
        throw error;
    }
    // 
    let userInfo = isUser.toJSON();
    delete userInfo.password;
    delete userInfo.createdAt;
    delete userInfo.updatedAt;

    let token = jwt.sign({
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
        role: userInfo.role_id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    })
    return { user: userInfo, token };

}



export { LoginService };