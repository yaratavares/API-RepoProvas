import { Test } from "@prisma/client";
import testRepository from "../repositories/testRepository.js";
import { notFound } from "../utils/errorUtils.js";

async function create(body: Test) {
  return testRepository.create(body);
}

async function update(id: number) {
  const testExist = await testRepository.findTest(id);

  if (!testExist) {
    throw notFound("Test not found");
  }

  await testRepository.updateViews(id);
}

export default { create, update };
