import { Request, Response } from "express";
import { ListFollowingUseCase } from "./ListFollowingUseCase";

export class ListFollowingController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listFollowingUseCase = new ListFollowingUseCase();

    const result = await listFollowingUseCase.execute(user_id);

    return response.json(result);
  }
}
