import { Request, Response } from "express";
import { ListFollowersUseCase } from "./ListFollowersUseCase";

export class ListFollowersController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listFollowersUseCase = new ListFollowersUseCase();

    const result = await listFollowersUseCase.execute(user_id);

    return response.json(result);
  }
}
