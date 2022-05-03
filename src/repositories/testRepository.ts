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

function findTest(id: number) {
  return client.test.findFirst({
    where: {
      id,
    },
  });
}

function updateViews(id: number) {
  return client.test.update({
    where: {
      id,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });
}

export default { create, findTest, updateViews };
