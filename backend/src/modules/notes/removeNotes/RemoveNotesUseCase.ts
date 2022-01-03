import { prisma } from "src/shared/infra/prisma/prisma";

interface IRemoveNote {
  user_id: string;
  note_id: string;
}

export class RemoveNotesUseCase {
  async execute({ user_id, note_id }: IRemoveNote) {
    const checkUser = await prisma.note.findFirst({
      where: { id: Number(note_id), user_id: Number(user_id) },
    });

    if (!checkUser) throw new Error("Notes invalid");

    const removeNote = await prisma.note.deleteMany({
      where: {
        id: Number(note_id),
        user_id: Number(user_id),
      },
    });

    return removeNote;
  }
}
