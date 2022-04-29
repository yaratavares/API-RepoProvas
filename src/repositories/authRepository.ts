import { User } from "@prisma/client";
import client from "../database.js";

function insert(newUser: User) {
  return client.user.create({
    data: newUser,
  });
}

function findByEmail(email: string) {
  return client.user.findFirst({ where: { email } });
}

function truncate() {
  return client.$executeRaw`TRUNCATE TABLE users, sessions`;
}

export default { insert, findByEmail, truncate };
