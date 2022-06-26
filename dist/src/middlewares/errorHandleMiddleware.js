import { errorTypeToStatusCode, isAppError, } from "../utils/errorUtils.js";
export function errorHandleMiddleware(error, req, res, next) {
    console.log(error);
    if (isAppError(error)) {
        return res.status(errorTypeToStatusCode(error.type)).send(error.message);
    }
    return res.sendStatus(500);
}
