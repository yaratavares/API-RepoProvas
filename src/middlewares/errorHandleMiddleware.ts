import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errorUtils.js";

export function errorHandleMiddleware(
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);

  if ("type" in error) {
    if (error.type === "not_found") {
      return res.sendStatus(404);
    }

    if (error.type === "bad_request") {
      return res.sendStatus(400);
    }

    if (error.type === "unauthorized") {
      return res.sendStatus(401);
    }

    if (error.type === "conflict") {
      return res.sendStatus(409);
    }
  }

  res.sendStatus(500);
}
