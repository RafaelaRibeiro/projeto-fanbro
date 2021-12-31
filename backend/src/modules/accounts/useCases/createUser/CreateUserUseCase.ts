import { prisma } from "src/shared/infra/prisma/prisma";
import { hash } from "bcrypt";
import tokens from "src/config/tokens";

interface ICreateUser {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export class CreateUserUseCase {
  async execute({
    name,
    username,
    email,
    password,
    confirmPassword,
  }: ICreateUser) {
    const checkEmail = await prisma.user.findUnique({ where: { email } });
    const checkUsername = await prisma.user.findUnique({ where: { username } });

    if (checkEmail) throw new Error("E-mail already exists");
    if (checkUsername) throw new Error("Username already exists");
    if (password !== confirmPassword) throw new Error("Password do not match");

    const passwordHash = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: passwordHash,
        Token: {
          create: {
            tokenActivate: tokens.token,
            tokenActivateExpires: tokens.tokenExpires,
          },
        },
        Image: {
          createMany: {
            data: [
              {
                name,
                size: 0,
                path: `https://robohash.org/${username}?set=set4`,
                key: tokens.keyPerfil,
                type: "U",
              },
              {
                name: `banner-${tokens.bannerRandom}.jpg`,
                size: 0,
                path: `https://s3.amazonaws.com/banner.fanbase/banner-${tokens.bannerRandom}.jpg`,
                key: tokens.keyBanner,
                type: "B",
              },
            ],
          },
        },
      },
    });

    return user;
  }
}
