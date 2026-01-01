import { error } from "../utils/response.js";

const errorMidleware = (err, req, res, next) => {
    if (err.isJoi) {
        const errors = err.details.map(d => ({
            field: d.path.join('.'),
            message: d.message
        }));
        return error(res, errors, "Validation failed", 400);
    }

    return error(res, [], err.message || "Internal Server Error", err.status || 500);
}
export default errorMidleware;