import { Chapter } from "@prisma/client";
import { prisma } from "src/shared/infra/prisma/prisma";

interface IUpdateChapter {
  user_id: number;
  chapter_id: string;
}

export class UpdateChapterUseCase {
  async execute({ user_id, chapter_id }: IUpdateChapter, chapter: Chapter) {
    const checkChapter = await prisma.chapter.findFirst({
      where: {
        id: Number(chapter_id),
        Project: { AND: { user_id } },
      },
    });

    if (!checkChapter) throw new Error("Chapter invalid");

    const updateChapter = await prisma.chapter.update({
      where: { id: Number(chapter_id) },
      data: { ...chapter },
    });

    return updateChapter;
  }
}
