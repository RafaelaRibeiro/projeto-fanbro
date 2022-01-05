import { prisma } from "src/shared/infra/prisma/prisma";

interface ICreateNotes {
  user_id: number;
  content: string;
}

export class CreateNotesUseCase {
  async execute({ user_id, content }: ICreateNotes) {
    if (!content) throw new Error("Content invalid");

    const note = await prisma.note.create({
      data: {
        user_id,
        content,
      },
    });

    return note;
  }
}
