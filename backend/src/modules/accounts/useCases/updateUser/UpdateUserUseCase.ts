import { User } from "@prisma/client";
import { prisma } from "src/shared/infra/prisma/prisma";

export class UpdateUserUseCase {
  async execute(user: User, user_id: number) {
    const update = await prisma.user.update({
      where: {
        id: user_id,
      },
      data: { ...user },
    });

    return update;
  }
}
