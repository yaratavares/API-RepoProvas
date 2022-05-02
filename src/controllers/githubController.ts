import { Request, Response } from "express";
import githubService from "../services/githubService.js";

async function redirect(req: Request, res: Response) {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
}

async function sendCode(req: Request, res: Response) {
  const code = req.query;

  res.send(code);
}

async function signIn(req: Request, res: Response) {
  const { code } = req.body;

  const token = await githubService.authenticate(code);
  res.send({ token });
}

export default { redirect, sendCode, signIn };
