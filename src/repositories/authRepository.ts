import { User } from "@prisma/client";
import client from "../database.js";

export type UserWithoutId = Omit<User, "id">;

function insert(newUser: UserWithoutId) {
  return client.user.create({
    data: newUser,
  });
}

function findByEmail(email: string) {
  return client.user.findFirst({ where: { email } });
}

function findByGithubId(githubId: number) {
  return client.user.findFirst({ where: { githubId } });
}

function truncate() {
  return client.$executeRaw`TRUNCATE TABLE users, sessions`;
}

export default { insert, findByEmail, findByGithubId, truncate };
