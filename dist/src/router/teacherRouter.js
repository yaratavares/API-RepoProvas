import { Router } from "express";
import teachersController from "../controllers/teachersController.js";
var teacherRouter = Router();
teacherRouter.get("/teachers", teachersController.getTeachersInDiscipline);
export default teacherRouter;
