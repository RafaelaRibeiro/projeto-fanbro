import { prisma } from "src/shared/infra/prisma/prisma";

interface IDeleteChapter {
  user_id: number;
  chapter_id: string;
}

export class DeleteChapterUseCase {
  async execute({ user_id, chapter_id }: IDeleteChapter) {
    const checkChapter = await prisma.chapter.findFirst({
      where: {
        id: Number(chapter_id),
        Project: { AND: { user_id } },
      },
    });

    if (!checkChapter) throw new Error("Chapter invalid");

    const deleteChapter = await prisma.chapter.update({
      where: { id: Number(chapter_id) },
      data: { deleted_at: new Date() },
    });

    return deleteChapter;
  }
}
