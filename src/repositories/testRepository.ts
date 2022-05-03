import { Test } from "@prisma/client";
import client from "../database.js";

function create(test: Test) {
  return client.test.create({
    data: {
      name: test.name,
      pdfUrl: test.pdfUrl,
      categoryId: test.categoryId,
      teacherDisciplineId: test.teacherDisciplineId,
    },
  });
}

export default { create };
