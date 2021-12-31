import { prisma } from "src/shared/infra/prisma/prisma";

export class ActivateUserUseCase {
  async execute(tokenActivate: string) {
    const checkToken = await prisma.token.findUnique({
      where: {
        tokenActivate,
      },
      include: {
        user: {
          select: {
            activated: true,
          },
        },
      },
    });

    if (!checkToken) throw new Error("Invalid token");
    if (checkToken.user.activated) throw new Error("User already verified");
    if (checkToken.tokenActivateExpires < new Date())
      throw new Error("Expired token");

    const token = await prisma.token.update({
      where: {
        tokenActivate,
      },
      data: {
        user: {
          update: {
            activated: true,
          },
        },
      },
    });

    return token;
  }
}
