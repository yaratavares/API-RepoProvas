import supertest from "supertest";
import faker from "@faker-js/faker";

import app from "../src/app.js";
import client from "../src/database.js";

describe("POST /sign-in", () => {
  beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE users, sessions`;
  });

  afterAll(async () => {
    await client.$disconnect();
  });

  it("send user schema invalid in body", async () => {
    const body = {};

    const response = await supertest(app).post("/sign-in").send(body);
    expect(response.status).toEqual(422);
  });

  it("send user schema valid in body", async () => {
    const body = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const response = await supertest(app).post("/sign-in").send(body);
    const user = await client.user.findUnique({ where: { email: body.email } });

    expect(response.status).toEqual(201);
    expect(user).not.toBeNull();
  });

  it("send user duplicate", async () => {
    const body = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await supertest(app).post("/sign-up").send(body);
    const response = await supertest(app).post("/sign-up").send(body);
    const users = await client.user.findMany({ where: { email: body.email } });

    expect(response.status).toEqual(409);
    expect(users.length).toEqual(1);
  });
});
