import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, username, password, confirmPassword } = request.body;
    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      name,
      email,
      username,
      password,
      confirmPassword,
    });
    return response.json(result);
  }
}
