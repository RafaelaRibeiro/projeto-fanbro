import { Request, Response } from "express";
import { ListPrivateProjectsUseCase } from "./ListPrivateProjectsUseCase";

export class ListPrivateProjectsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listPrivateProjectsUseCase = new ListPrivateProjectsUseCase();

    const result = await listPrivateProjectsUseCase.execute(user_id);

    return response.json(result);
  }
}
