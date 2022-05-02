import { Response, Request } from "express";
import disciplineService from "../services/disciplineService.js";

async function getDisciplines(req: Request, res: Response) {
  const { words } = req.params;

  const object = await disciplineService.filterDisciplines(words);

  res.send(object);
}

export default { getDisciplines };
