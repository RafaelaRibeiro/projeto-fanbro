import { Request, Response } from "express";
import { DeleteNotesUseCase } from "./DeleteNotesUseCase";

export class DeleteNotesController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { id: note_id } = request.params;

    const deleteNotesUseCase = new DeleteNotesUseCase();

    const result = await deleteNotesUseCase.execute({ user_id, note_id });

    return response.status(200).send();
  }
}
