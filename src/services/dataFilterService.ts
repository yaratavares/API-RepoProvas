import disciplinesRepository from "../repositories/disciplinesRepository.js";

async function filterDisciplines() {
  const result = await disciplinesRepository.getObjectAllDisciplines();

  return result;
}

async function filterTeachers() {
  const result = await disciplinesRepository.getObjectAllTeachers();

  return result;
}

export default { filterDisciplines, filterTeachers };
