import { Test } from "@prisma/client";
import joi from "joi";

const testSchema = joi.object<Test>({
  name: joi.string().required(),
  pdfUrl: joi.string().uri().required(),
  categoryId: joi.number().required(),
  teacherDisciplineId: joi.number().required(),
});

export default testSchema;
