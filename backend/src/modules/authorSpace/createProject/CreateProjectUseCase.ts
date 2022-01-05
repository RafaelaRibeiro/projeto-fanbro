import { Chapter, Project } from "@prisma/client";
import { prisma } from "src/shared/infra/prisma/prisma";

export class CreateProjectUseCase {
  async execute(user_id: number, project: Project, chapter: Chapter) {
    if (!project.name) throw new Error("Title invalid");
    if (!project.category_id) throw new Error("category invalid");
    if (!project.classification) throw new Error("Classification invalid");
    if (!project.synopsis) throw new Error("Synopsis invalid");
    if (!chapter.name) throw new Error("Chapter name invalid");
    if (!chapter.number) throw new Error("Chapter number invalid");
    if (!chapter.content) throw new Error("Content is empty");

    const createProject = await prisma.project.create({
      data: {
        ...project,
        user_id,
        Chapter: {
          create: { ...chapter, content: Buffer.from(chapter.content) },
        },
      },
    });

    return createProject;
  }
}
