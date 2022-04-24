export interface AppError {
  type: "not_found" | "bad_request" | "conflict" | "unauthorized";
}

export function notFound(): AppError {
  return { type: "not_found" };
}

export function conflict(): AppError {
  return { type: "conflict" };
}

export function badRequest(): AppError {
  return { type: "bad_request" };
}

export function unauthorized(): AppError {
  return { type: "unauthorized" };
}

export default { notFound, conflict, badRequest, unauthorized };
