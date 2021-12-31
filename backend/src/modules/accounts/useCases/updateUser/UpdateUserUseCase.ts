import { User } from "@prisma/client";
import { prisma } from "src/shared/infra/prisma/prisma";

export class UpdateUserUseCase {
  async execute(user: User, user_id: string) {
    const update = await prisma.user.update({
      where: {
        id: Number(user_id),
      },
      data: { ...user },
    });

    return update;
  }
}
