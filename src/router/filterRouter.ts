import { Router } from "express";
import disciplinesController from "../controllers/disciplinesController.js";
import teachersController from "../controllers/teachersController.js";
import tokenValideMiddleware from "../middlewares/tokenValidateMiddleware.js";

const filterRouter = Router();

filterRouter.get(
  "/filter/disciplines",
  tokenValideMiddleware,
  disciplinesController.getFilterDisciplines
);

filterRouter.get(
  "/filter/disciplines/:words",
  tokenValideMiddleware,
  disciplinesController.getFilterDisciplines
);
filterRouter.get(
  "/filter/teachers/:words",
  tokenValideMiddleware,
  teachersController.getFilterTeachers
);
filterRouter.get(
  "/filter/teachers",
  tokenValideMiddleware,
  teachersController.getFilterTeachers
);

export default filterRouter;
