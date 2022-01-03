import { Request, Response } from "express";
import { RemoveNotesUseCase } from "./RemoveNotesUseCase";

export class RemoveNotesController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { id: note_id } = request.params;

    const removeNotesUseCase = new RemoveNotesUseCase();

    const result = await removeNotesUseCase.execute({ user_id, note_id });

    return response.status(200).send();
  }
}
