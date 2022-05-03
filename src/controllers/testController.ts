import { Request, Response } from "express";
import testService from "../services/testService.js";

async function create(req: Request, res: Response) {
  const body = req.body;

  await testService.create(body);

  res.sendStatus(201);
}

async function countLike(req: Request, res: Response) {
  const { id } = req.params;

  await testService.update(Number(id));

  res.sendStatus(200);
}

export default { create, countLike };
