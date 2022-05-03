import disciplinesRepository from "../repositories/disciplinesRepository.js";

async function filterDisciplines(inputSearch: string | null) {
  const result = await disciplinesRepository.getObjectAllDisciplines(
    inputSearch
  );

  return result;
}

async function getDisciplines() {
  return disciplinesRepository.getDisciplines();
}

export default { filterDisciplines, getDisciplines };
