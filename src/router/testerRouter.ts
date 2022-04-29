import { Router } from "express";
import testerController from "../controllers/testerController.js";

const testerRouter = Router();

testerRouter.post("/tests/reset", testerController.resetDatabase);

export default testerRouter;
