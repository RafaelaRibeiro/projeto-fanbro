import { prisma } from "src/shared/infra/prisma/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateUser {
  email: string;
  password: string;
}
export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const checkUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!checkUser) throw new Error("E-mail or password invalid");

    const passwordMatch = await compare(password, checkUser.password);
    if (!passwordMatch) throw new Error("E-mail or password invalid");

    const token = sign({ email }, "47fe02b508e7b8a23d38db6e787fd4ba", {
      subject: checkUser.id.toString(),
      expiresIn: "7d",
    });

    return token;
  }
}
