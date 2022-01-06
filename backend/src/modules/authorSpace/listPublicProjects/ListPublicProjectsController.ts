import { Request, Response } from "express";
import { ListPublicProjectsUseCase } from "./ListPublicProjectsUseCase";

export class ListPublicProjectsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listPublicProjectsUseCase = new ListPublicProjectsUseCase();

    const result = await listPublicProjectsUseCase.execute(user_id);

    return response.json(result);
  }
}
