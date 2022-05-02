type AppErrorTypes = "not_found" | "conflict" | "unauthorized" | "wrong_schema";

export interface AppError {
  type: AppErrorTypes;
  message: string;
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}

export function errorTypeToStatusCode(type: AppErrorTypes) {
  if (type === "conflict") return 409;
  if (type === "not_found") return 404;
  if (type === "unauthorized") return 401;
  if (type === "wrong_schema") return 422;
  return 400;
}

export function notFound(message?: string): AppError {
  return { type: "not_found", message };
}

export function conflict(message?: string): AppError {
  return { type: "conflict", message };
}

export function unauthorized(message?: string): AppError {
  return { type: "unauthorized", message };
}

export default { notFound, conflict, unauthorized };
