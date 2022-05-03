import { Router } from "express";
import testController from "../controllers/testController.js";

import validateSchemaMiddleware from "../middlewares/schemaValidateMiddleware.js";
import testSchema from "../schemas/testSchema.js";

const testRouter = Router();

testRouter.post(
  "/tests",
  validateSchemaMiddleware(testSchema),
  testController.create
);
testRouter.post("/tests/:id", testController.countLike);

export default testRouter;
