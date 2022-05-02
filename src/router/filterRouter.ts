import { Router } from "express";
import disciplinesController from "../controllers/disciplinesController.js";
import teachersController from "../controllers/teachersController.js";
import tokenValideMiddleware from "../middlewares/tokenValidateMiddleware.js";

const filterRouter = Router();

filterRouter.get(
  "/disciplines",
  tokenValideMiddleware,
  disciplinesController.getDisciplines
);

filterRouter.get(
  "/disciplines/:words",
  tokenValideMiddleware,
  disciplinesController.getDisciplines
);
filterRouter.get(
  "/teachers/:words",
  tokenValideMiddleware,
  teachersController.getTeachers
);
filterRouter.get(
  "/teachers",
  tokenValideMiddleware,
  teachersController.getTeachers
);

export default filterRouter;
