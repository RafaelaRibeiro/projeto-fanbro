import { Request, Response } from "express";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

export class CreateProjectController {
  async handle(request: Request, response: Response) {
    const { project, chapter } = request.body;
    const { user_id } = request;

    const createProjectUseCase = new CreateProjectUseCase();

    const result = await createProjectUseCase.execute(
      user_id,
      project,
      chapter
    );

    return response.json(result);
  }
}
