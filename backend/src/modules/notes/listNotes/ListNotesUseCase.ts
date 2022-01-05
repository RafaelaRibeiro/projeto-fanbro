import { prisma } from "src/shared/infra/prisma/prisma";

export class ListNotesUseCase {
  async execute(user_id: number) {
    const notes = await prisma.note.findMany({
      where: { user_id },
    });

    return notes;
  }
}
