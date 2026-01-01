import transporter from "../config/mailer.js";
import ForgotEmailTemplate from "../utils/emailTemplate/Forgot.js";

const ForgotMail = async (to) => {
    await transporter.verify();
    let resetLink = process.env.CLIENT_ADDRESS;
    let res = await transporter.sendMail({
        from: "Sohana Chicken",
        to,
        subject: "Forgot your password",
        html: ForgotEmailTemplate(resetLink)
    });

    let successMessg = res.response.split(" ");
    if (successMessg[0] == 250) {
        return true;
    } else {
        return res
    }

}

export { ForgotMail };