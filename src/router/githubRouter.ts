import { Router } from "express";
import githubController from "../controllers/githubController.js";

const githubRouter = Router();

githubRouter.get("/github", githubController.redirect);
githubRouter.get("/sign-in/callback", githubController.sendCode);
githubRouter.post("/authenticate", githubController.signIn);

export default githubRouter;
