import joi from "joi";

const authSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

export default authSchema;
