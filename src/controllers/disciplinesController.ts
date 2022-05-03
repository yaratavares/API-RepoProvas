import { Response, Request } from "express";
import disciplineService from "../services/disciplineService.js";

async function getFilterDisciplines(req: Request, res: Response) {
  const { words } = req.params;

  const object = await disciplineService.filterDisciplines(words);

  res.send(object);
}

async function getDisciplines(req: Request, res: Response) {
  const disciplines = await disciplineService.getDisciplines();

  res.send(disciplines);
}

export default { getFilterDisciplines, getDisciplines };
