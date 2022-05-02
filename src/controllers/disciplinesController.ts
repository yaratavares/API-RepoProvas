import { Response, Request } from "express";
import dataFilterService from "../services/disciplinesService.js";

async function getDisciplines(req: Request, res: Response) {
  const { words } = req.params;

  const object = await dataFilterService.filterDisciplines(words);

  res.send(object);
}

async function getTeachers(req: Request, res: Response) {
  const object = await dataFilterService.filterTeachers();

  res.send(object);
}

export default { getDisciplines, getTeachers };
