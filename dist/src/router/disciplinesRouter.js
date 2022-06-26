import { Router } from "express";
import disciplinesController from "../controllers/disciplinesController.js";
var disciplineRouter = Router();
disciplineRouter.get("/disciplines", disciplinesController.getDisciplines);
export default disciplineRouter;
