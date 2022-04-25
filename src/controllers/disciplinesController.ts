import { Response, Request } from "express";
import dataFilterService from "../services/dataFilterService.js";

async function getDisciplines(req: Request, res: Response) {
  const object = await dataFilterService.filterDisciplines();

  res.send(object);
}

async function getTeachers(req: Request, res: Response) {
  const object = await dataFilterService.filterTeachers();

  res.send(object);
}

export default { getDisciplines, getTeachers };
