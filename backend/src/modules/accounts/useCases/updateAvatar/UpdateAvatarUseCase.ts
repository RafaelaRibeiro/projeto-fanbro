import { Image } from "@prisma/client";
import { prisma } from "src/shared/infra/prisma/prisma";

export class UpdateAvatarUseCase {
  async execute(image: Image, user_id: string) {
    await prisma.image.deleteMany({
      where: {
        user_id: Number(user_id),
        type: "U",
      },
    });

    const avatar = await prisma.image.create({
      data: { ...image, type: "U", user_id: Number(user_id) },
    });
  }
}
