

const validateSchema = (schema) => {
    try {
        return async (req, res, next) => {
            await schema.validateAsync(req.body, { abortEarly: true });
            next();
        };
    } catch (err) {
        next(err);
    }
}

export default validateSchema;