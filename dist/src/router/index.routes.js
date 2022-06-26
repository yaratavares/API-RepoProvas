import { Router } from "express";
import authRouter from "./authRouter.js";
import categoryRouter from "./categoryRouter.js";
import disciplineRouter from "./disciplinesRouter.js";
import filterRouter from "./filterRouter.js";
import githubRouter from "./githubRouter.js";
import teacherRouter from "./teacherRouter.js";
import testerRouter from "./testerRouter.js";
import testRouter from "./testRouter.js";
var router = Router();
router.use(filterRouter);
router.use(authRouter);
router.use(githubRouter);
router.use(testRouter);
router.use(disciplineRouter);
router.use(categoryRouter);
router.use(teacherRouter);
if (process.env.NODE_ENV === "test") {
    router.use(testerRouter);
}
export default router;
