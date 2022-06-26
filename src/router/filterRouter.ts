import { Router } from "express";
import disciplinesController from "../controllers/disciplinesController.js";
import teachersController from "../controllers/teachersController.js";
import tokenValideMiddleware from "../middlewares/tokenValidateMiddleware.js";

const filterRouter = Router();

filterRouter.get(
  "/filter/disciplines/:words",
  disciplinesController.getFilterDisciplines
);
filterRouter.get(
  "/filter/disciplines",
  disciplinesController.getFilterDisciplines
);

filterRouter.get(
  "/filter/teachers/:words",
  teachersController.getFilterTeachers
);
filterRouter.get("/filter/teachers", teachersController.getFilterTeachers);

export default filterRouter;
