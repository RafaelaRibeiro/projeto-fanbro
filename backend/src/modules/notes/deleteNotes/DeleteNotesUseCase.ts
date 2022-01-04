import { prisma } from "src/shared/infra/prisma/prisma";

interface IDeleteNote {
  user_id: string;
  note_id: string;
}

export class DeleteNotesUseCase {
  async execute({ user_id, note_id }: IDeleteNote) {
    const checkUser = await prisma.note.findFirst({
      where: { id: Number(note_id), user_id: Number(user_id) },
    });

    if (!checkUser) throw new Error("Notes invalid");

    const deleteNote = await prisma.note.deleteMany({
      where: {
        id: Number(note_id),
        user_id: Number(user_id),
      },
    });

    return deleteNote;
  }
}
