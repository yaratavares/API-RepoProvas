import { Request, Response } from "express";
import testService from "../services/testService.js";

async function create(req: Request, res: Response) {
  const body = req.body;

  await testService.create(body);

  res.sendStatus(200);
}

export default { create };
