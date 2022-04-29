import { Request, Response } from "express";
import authService from "../services/authService.js";

async function resetDatabase(req: Request, res: Response) {
  await authService.resetDatabase();

  res.sendStatus(200);
}

export default { resetDatabase };
