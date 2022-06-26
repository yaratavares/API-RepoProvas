import categoryRepository from "../repositories/categoryRepository.js";
function getCategories() {
    return categoryRepository.getCategories();
}
export default { getCategories: getCategories };
