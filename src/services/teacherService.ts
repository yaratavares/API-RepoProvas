import teachersRepository from "../repositories/teachersRepository.js";

async function filterTeachers(inputSearch: string | null) {
  const result = await teachersRepository.getObjectAllTeachers(inputSearch);

  return result;
}

async function getTeachers() {
  return teachersRepository.getTeachers();
}

export default { filterTeachers, getTeachers };
