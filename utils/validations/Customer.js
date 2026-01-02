import Joi from "joi";

const CreateCustomerSchema = Joi.object({

    shopname: Joi.string().min(3).required()
        .messages(
            {
                "string.empty": "Shopname is required",
                "string.any.required": "Shopname is required",
            }
        ),
    phone: Joi.string().min(10).max(10).required()
        .messages({
            "string.empty": "Phone is required",
            "string.any.required": "Phone is required",
            "string.min": "Phone should have at least 10 characters"
        }),

    name: Joi.string().optional().allow("", null),
    email: Joi.string().email().optional().allow("", null),
    address: Joi.string().optional().allow("", null),

})

export { CreateCustomerSchema };