import { Request, Response } from "express";
import { CreateNotesUseCase } from "./CreateNotesUseCase";

export class CreateNotesController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { content } = request.body;

    const createNotesUseCase = new CreateNotesUseCase();

    const result = await createNotesUseCase.execute({ user_id, content });

    return response.json(result);
  }
}
