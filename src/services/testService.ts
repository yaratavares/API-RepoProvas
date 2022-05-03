import { Test } from "@prisma/client";
import testRepository from "../repositories/testRepository.js";

async function create(body: Test) {
  return testRepository.create(body);
}

export default { create };
