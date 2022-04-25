import { Router } from "express";
import tokenValideMiddleware from "../middlewares/tokenValidateMiddleware.js";
import authRouter from "./authRouter.js";
import filterRouter from "./filterRouter.js";

const router = Router();

router.use(authRouter);
router.use(tokenValideMiddleware, filterRouter);

export default router;
