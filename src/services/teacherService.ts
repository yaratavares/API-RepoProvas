import teachersRepository from "../repositories/teachersRepository.js";

async function filterTeachers(inputSearch: string | null) {
  const result = await teachersRepository.getObjectAllTeachers(inputSearch);

  return result;
}

export default { filterTeachers };
