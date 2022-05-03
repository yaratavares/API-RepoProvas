import teachersRepository from "../repositories/teachersRepository.js";

async function filterTeachers(inputSearch: string | null) {
  const result = await teachersRepository.getObjectAllTeachers(inputSearch);

  return result;
}

async function getTeachers(disciplineId: number) {
  return teachersRepository.getTeachers(disciplineId);
}

export default { filterTeachers, getTeachers };
