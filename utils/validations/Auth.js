import Joi from "joi";

const LoginSchema = Joi.object({
    email: Joi.string().email().required().messages(
        {
            "string.empty": "Email is required",
            "any.required": "Email is required",
            "string.email": "Email must be a valid email",

        }
    ),
    password: Joi.string().min(6).required().messages(
        {
            "string.empty": "Password is required",
            "any.required": "Password is required",
            "string.min": "Password must be at least 6 characters long",
        }
    )

});

export { LoginSchema };