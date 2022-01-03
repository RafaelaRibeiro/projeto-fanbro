import { Request, Response } from "express";
import { ListNotesUseCase } from "./ListNotesUseCase";

export class ListNotesController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listNotesUseCase = new ListNotesUseCase();
    const result = await listNotesUseCase.execute(user_id);

    return response.json(result);
  }
}
