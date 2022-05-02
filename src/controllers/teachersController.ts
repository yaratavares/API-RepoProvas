import { Response, Request } from "express";
import teacherService from "../services/teacherService.js";

async function getTeachers(req: Request, res: Response) {
  const { words } = req.params;

  const object = await teacherService.filterTeachers(words);

  res.send(object);
}

export default { getTeachers };
