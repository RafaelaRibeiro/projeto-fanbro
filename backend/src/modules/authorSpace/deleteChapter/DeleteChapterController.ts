import { Request, Response } from "express";
import { DeleteChapterUseCase } from "./DeleteChapteUseCase";

export class DeleteChapterController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { id: chapter_id } = request.params;

    const deleteChapterUseCase = new DeleteChapterUseCase();

    const result = await deleteChapterUseCase.execute({ user_id, chapter_id });

    return response.json(result);
  }
}
