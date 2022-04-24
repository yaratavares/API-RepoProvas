import { Session } from "@prisma/client";
import client from "../database.js";

function findByUserId(userId: number) {
  return client.session.findFirst({ where: { userId } });
}

function create(newSession: Session) {
  return client.session.create({ data: newSession });
}

function update(session: Session, token: string) {
  return client.session.update({
    where: { userId_token: { userId: session.userId, token: session.token } },
    data: { token },
  });
}

function findByToken(token: string) {
  return client.session.findFirst({ where: { token } });
}

export default { findByUserId, create, update, findByToken };
