import { prisma } from "src/shared/infra/prisma/prisma";

interface IUnfollow {
  user_id: number;
  following_id: number;
}
export class UnfollowUseCase {
  async execute({ user_id, following_id }: IUnfollow) {
    const checkConnection = await prisma.connection.findUnique({
      where: {
        user_id_following_id: { user_id, following_id },
      },
    });

    if (!checkConnection) throw new Error("Você não segue esse usuário");

    await prisma.connection.delete({
      where: {
        user_id_following_id: { user_id, following_id },
      },
    });
  }
}
