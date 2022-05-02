import tokenValideMiddleware from "../middlewares/tokenValidateMiddleware.js";
import disciplinesController from "../controllers/disciplinesController.js";
import { Router } from "express";

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
  "/teachers",
  tokenValideMiddleware,
  disciplinesController.getTeachers
);

export default filterRouter;
