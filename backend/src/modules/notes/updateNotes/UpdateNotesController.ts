import { Request, Response } from "express";
import { UpdateNotesUseCase } from "./UpdateNotesUseCase";

export class UpdateNotesController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { content } = request.body;
    const { id: note_id } = request.params;

    const updateNoteUseCase = new UpdateNotesUseCase();

    const result = await updateNoteUseCase.execute({
      user_id,
      content,
      note_id,
    });

    return response.json(result);
  }
}
