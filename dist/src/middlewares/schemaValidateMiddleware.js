export default function validateSchemaMiddleware(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            var err = validation.error.details.map(function (detail) { return detail.message; });
            return res.status(422).send(err);
        }
        next();
    };
}
