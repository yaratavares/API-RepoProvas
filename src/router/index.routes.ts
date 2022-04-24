import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/schemaValidateMiddleware.js";
import authSchema from "../schemas/authSchema.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use(validateSchemaMiddleware(authSchema), authRouter);

export default router;
