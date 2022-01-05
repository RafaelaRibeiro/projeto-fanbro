import { Request, Response } from "express";
import { CreateChapterUseCase } from "./CreateChapterUseCase";

export class CreateChapterController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { name, number, content } = request.body;
    const { id: project_id } = request.params;

    const createChapterUseCase = new CreateChapterUseCase();

    const result = await createChapterUseCase.execute({
      user_id,
      project_id,
      name,
      number,
      content,
    });

    return response.json(result);
  }
}
