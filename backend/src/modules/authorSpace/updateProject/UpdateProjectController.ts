import { Request, Response } from "express";
import { UpdateProjectUseCase } from "./UpdateProjectUseCase";

export class UpdateProjectController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { id: project_id } = request.params;
    const { project } = request.body;

    const updateProjectUseCase = new UpdateProjectUseCase();

    const result = await updateProjectUseCase.execute(
      { user_id, project_id },
      project
    );

    return response.json(result);
  }
}
