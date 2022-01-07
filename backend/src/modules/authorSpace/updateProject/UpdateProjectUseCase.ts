import { Project } from "@prisma/client";
import { prisma } from "src/shared/infra/prisma/prisma";

interface IUpadateProject {
  user_id: number;
  project_id: string;
}

export class UpdateProjectUseCase {
  async execute({ user_id, project_id }: IUpadateProject, project: Project) {
    const updateProject = await prisma.project.updateMany({
      where: { id: Number(project_id), user_id },
      data: { ...project },
    });

    return updateProject;
  }
}
