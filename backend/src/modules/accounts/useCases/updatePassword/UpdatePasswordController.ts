import { Request, Response } from "express";
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase";

export class UpdatePasswordController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { password, newPassword, confirmPassword } = request.body;
    const updatePasswordUseCase = new UpdatePasswordUseCase();

    const result = await updatePasswordUseCase.execute({
      user_id,
      password,
      newPassword,
      confirmPassword,
    });

    return response.json(result);
  }
}
