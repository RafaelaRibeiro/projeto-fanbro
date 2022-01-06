import { prisma } from "src/shared/infra/prisma/prisma";

export class ListPublicProjectsUseCase {
  async execute(user_id: number) {
    const projects = await prisma.project.findMany({
      where: {
        user_id,
        published: true,
        deleted_at: null,
      },
      include: {
        Image: { select: { path: true }, where: { type: "P" } },
      },
    });
    return projects;
  }
}
