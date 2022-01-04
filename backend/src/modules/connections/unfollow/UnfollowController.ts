import { Request, Response } from "express";
import { UnfollowUseCase } from "./UnfollowUseCase";

export class UnfollowController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { following_id } = request.body;

    const unfollowUseCase = new UnfollowUseCase();

    await unfollowUseCase.execute({ user_id, following_id });

    return response.status(200).send();
  }
}
