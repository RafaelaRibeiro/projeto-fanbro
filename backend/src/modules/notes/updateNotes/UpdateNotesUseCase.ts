import { prisma } from "src/shared/infra/prisma/prisma";

interface IUpdateNotes {
  user_id: string;
  note_id: string;
  content: string;
}

export class UpdateNotesUseCase {
  async execute({ user_id, note_id, content }: IUpdateNotes) {
    const checkUser = await prisma.note.findFirst({
      where: { id: Number(note_id), user_id: Number(user_id) },
    });

    if (!checkUser) throw new Error("Notes invalid");

    const updateNote = await prisma.note.updateMany({
      where: {
        id: Number(note_id),
        user_id: Number(user_id),
      },
      data: {
        content,
      },
    });

    return updateNote;
  }
}
