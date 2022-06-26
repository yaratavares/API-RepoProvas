import { Router } from "express";
import githubController from "../controllers/githubController.js";
var githubRouter = Router();
githubRouter.get("/github", githubController.redirect);
githubRouter.get("/sign-in/callback", githubController.sendCode);
githubRouter.post("/authenticate", githubController.signIn);
export default githubRouter;
