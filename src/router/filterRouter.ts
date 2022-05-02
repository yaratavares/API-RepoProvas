import tokenValideMiddleware from "../middlewares/tokenValidateMiddleware.js";
import disciplinesController from "../controllers/disciplinesController.js";
import { Router } from "express";

const filterRouter = Router();

filterRouter.get(
  "/disciplines",

  disciplinesController.getDisciplines
);

filterRouter.get(
  "/disciplines/:words",

  disciplinesController.getDisciplines
);
filterRouter.get(
  "/teachers/:words",

  disciplinesController.getTeachers
);
filterRouter.get(
  "/teachers",

  disciplinesController.getTeachers
);

export default filterRouter;
