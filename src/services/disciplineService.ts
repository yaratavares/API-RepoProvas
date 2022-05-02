import disciplinesRepository from "../repositories/disciplinesRepository.js";

async function filterDisciplines(inputSearch: string | null) {
  const result = await disciplinesRepository.getObjectAllDisciplines(
    inputSearch
  );

  return result;
}

export default { filterDisciplines };
