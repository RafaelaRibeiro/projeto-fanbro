import { prisma } from "src/shared/infra/prisma/prisma";

interface IFollowUser {
  user_id: number;
  following_id: number;
}

export class FollowUserUseCase {
  async execute({ user_id, following_id }: IFollowUser) {
    const checkFollowUser = await prisma.user.findUnique({
      where: { id: following_id },
    });
    if (!checkFollowUser) throw new Error("User Invalid");

    const checkConnection = await prisma.connection.findUnique({
      where: {
        user_id_following_id: {
          user_id,
          following_id,
        },
      },
    });
    if (checkConnection) throw new Error("Connection already existis");

    if (user_id === following_id) throw new Error("User Invalid");

    const connection = await prisma.connection.create({
      data: {
        user_id,
        following_id,
      },
    });

    return connection;
  }
}
