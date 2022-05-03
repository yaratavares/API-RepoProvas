import { Router } from "express";
import teachersController from "../controllers/teachersController.js";

const teacherRouter = Router();

teacherRouter.get("/teachers/:id", teachersController.getTeachersInDiscipline);

export default teacherRouter;
