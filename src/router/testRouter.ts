import { Router } from "express";
import testController from "../controllers/testController.js";

import validateSchemaMiddleware from "../middlewares/schemaValidateMiddleware.js";
import testSchema from "../schemas/testSchema.js";

const testRouter = Router();

testRouter.post(
  "/disciplines",
  validateSchemaMiddleware(testSchema),
  testController.create
);

export default testRouter;
