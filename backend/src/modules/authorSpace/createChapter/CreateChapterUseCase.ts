import { prisma } from "src/shared/infra/prisma/prisma";

interface ICreateProject {
  user_id: number;
  project_id: string;
  name: string;
  number: number;
  content: string;
}

export class CreateChapterUseCase {
  async execute({
    user_id,
    project_id,
    name,
    number,
    content,
  }: ICreateProject) {
    const checkProject = await prisma.project.findFirst({
      where: { id: Number(project_id), user_id },
    });

    if (!checkProject) throw new Error("Project Invalid");

    const createChapter = await prisma.chapter.create({
      data: {
        name,
        number,
        content: Buffer.from(content),
        project_id: Number(project_id),
      },
    });

    return createChapter;
  }
}
