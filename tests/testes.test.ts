import supertest from "supertest";
import app from "../src/app.js";
import client from "../src/database.js";
import bodyTest from "./factories/bodyTest.js";
import createDataTests from "./factories/createDataTests.js";

beforeEach(truncateTables);

afterAll(disconnect);

describe("Create test - POST /tests", () => {
  it("Should answer with status code 201 when create new test valid", async () => {
    const { categoryData, teacherDisciplineData } = await createDataTests();

    const body = bodyTest(categoryData, teacherDisciplineData);

    const result = await supertest(app).post("/tests").send(body);
    const testCreated = await client.test.findFirst({
      where: { name: body.name },
    });

    expect(result.status).toEqual(201);
    expect(testCreated).not.toBeNull();
  });

  it("Should answer with status code 422 when post new test invalid", async () => {
    const { categoryData, teacherDisciplineData } = await createDataTests();

    const body = bodyTest(categoryData, teacherDisciplineData);
    delete body.name;

    const result = await supertest(app).post("/tests").send(body);
    const testCreated = await client.test.findFirst({
      where: { pdfUrl: body.pdfUrl },
    });

    expect(result.status).toEqual(422);
    expect(testCreated).toBeNull();
  });
});

describe("Update test - POST /tests/:id", () => {
  it("Should answer with status code 200 when send one post in test", async () => {
    const { categoryData, teacherDisciplineData } = await createDataTests();

    const body = bodyTest(categoryData, teacherDisciplineData);

    const result = await supertest(app).post("/tests").send(body);
    const testCreated = await client.test.findFirst({
      where: { name: body.name },
    });

    const updateTest = await supertest(app).post(`/tests/${testCreated.id}`);

    expect(result.status).toEqual(201);
    expect(updateTest.status).toEqual(200);
  });

  it("Should answer with status code 404 when request test that does not exist", async () => {
    const updateTest = await supertest(app).post(`/tests/1`);

    expect(updateTest.status).toEqual(404);
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
  await client.$disconnect();
}
