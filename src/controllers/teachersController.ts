import { Response, Request } from "express";
import teacherService from "../services/teacherService.js";

async function getFilterTeachers(req: Request, res: Response) {
  const { words } = req.params;

  const object = await teacherService.filterTeachers(words);

  res.send(object);
}

async function getTeachersInDiscipline(req: Request, res: Response) {
  const teachers = await teacherService.getTeachers();

  res.send(teachers);
}

export default { getFilterTeachers, getTeachersInDiscipline };
