import client from "../database.js";

function getCategories() {
  return client.category.findMany();
}

export default { getCategories };
