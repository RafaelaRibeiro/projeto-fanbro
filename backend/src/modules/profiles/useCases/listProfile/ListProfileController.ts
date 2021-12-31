import { Request, Response } from "express";
import { ListProfileUseCase } from "./ListProfileUseCase";

export class ListProfileController {
  async handle(request: Request, response: Response) {
    const { user_id } = request.params;

    const listProfileUseCase = new ListProfileUseCase();

    const result = await listProfileUseCase.execute(user_id);

    return response.json(result);
  }
}
