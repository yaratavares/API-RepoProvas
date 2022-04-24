import { Router } from "express";
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", authController.signUp);
authRouter.post("/sign-in", authController.signIn);

export default authRouter;
