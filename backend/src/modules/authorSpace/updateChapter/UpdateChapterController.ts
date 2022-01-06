import { Request, Response } from "express";
import { UpdateChapterUseCase } from "./UpdateChapterUseCase";

export class UpdateChapterController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { id: chapter_id } = request.params;
    const { chapter } = request.body;

    const updateChapterUseCase = new UpdateChapterUseCase();

    const result = await updateChapterUseCase.execute(
      { user_id, chapter_id },
      chapter
    );

    return response.json(result);
  }
}
