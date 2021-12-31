import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "47fe02b508e7b8a23d38db6e787fd4ba"
    ) as IPayload;

    request.user.id = user_id;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }
}
