import { Router } from "express";
import authRouter from "./authRouter.js";
import filterRouter from "./filterRouter.js";
import testerRouter from "./testerRouter.js";

const router = Router();

router.use(authRouter);
router.use(filterRouter);

if (process.env.NODE_ENV === "test") {
  router.use(testerRouter);
}

export default router;
