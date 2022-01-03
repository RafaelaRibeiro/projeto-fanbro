import { prisma } from "src/shared/infra/prisma/prisma";
import { compare, hash } from "bcrypt";

interface IUpdatePassword {
  user_id: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export class UpdatePasswordUseCase {
  async execute({
    user_id,
    password,
    newPassword,
    confirmPassword,
  }: IUpdatePassword) {
    const user = await prisma.user.findUnique({
      where: { id: Number(user_id) },
    });

    const passwordMacth = await compare(password, user.password);
    if (!passwordMacth) throw new Error("Password Invalid");
    if (newPassword !== confirmPassword)
      throw new Error("Password do not match");

    const passwordHash = await hash(newPassword, 10);

    const pwd = await prisma.user.update({
      where: { id: Number(user_id) },
      data: { password: passwordHash },
    });

    return pwd;
  }
}
