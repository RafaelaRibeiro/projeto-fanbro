import { prisma } from "src/shared/infra/prisma/prisma";

export class ListNotesUseCase {
  async execute(user_id: string) {
    const notes = await prisma.note.findMany({
      where: { user_id: Number(user_id) },
    });

    return notes;
  }
}
