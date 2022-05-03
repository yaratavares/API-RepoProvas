import { Router } from "express";
import disciplinesController from "../controllers/disciplinesController.js";

const disciplineRouter = Router();

disciplineRouter.get("/disciplines", disciplinesController.getDisciplines);

export default disciplineRouter;
