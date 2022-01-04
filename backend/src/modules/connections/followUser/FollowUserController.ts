import { Request, Response } from "express";
import { FollowUserUseCase } from "./FollowUserUseCase";

export class FollowUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { following_id } = request.body;

    const followUserUseCase = new FollowUserUseCase();

    const result = await followUserUseCase.execute({ user_id, following_id });

    return response.json(result);
  }
}
