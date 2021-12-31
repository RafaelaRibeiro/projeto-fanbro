import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const user = { ...request.body };
    const updateUserUseCase = new UpdateUserUseCase();
    const result = await updateUserUseCase.execute(user, user_id);

    return response.status(201).send();
  }
}
