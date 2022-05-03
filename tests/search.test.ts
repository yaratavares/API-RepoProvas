import supertest from "supertest";
import app from "../src/app";
import createDataDisciplines from "./factories/createDataDisciplines";
import client from "../src/database.js";

beforeEach(truncateTables);

beforeAll(disconnect);

describe("Select disciplines - GET /filter/disciplines", () => {
  it("Should answer with array not empty when take disciplines that starts with 'a'", async () => {
    await createDataDisciplines();

    const result = await supertest(app).get(`/filter/disciplines/${"Ja"}`);

    expect(result.status).toEqual(200);
  });
});

async function truncateTables() {
  await client.$executeRaw`TRUNCATE TABLE categories CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE teachers CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE terms CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE disciplines CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE tests CASCADE`;
}

async function disconnect() {
  return client.$disconnect;
}
