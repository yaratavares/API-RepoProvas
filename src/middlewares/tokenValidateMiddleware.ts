import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/authService.js";

export default async function tokenValideMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const user = await verifyToken(token);

  res.locals.user = user;
  next();
}
