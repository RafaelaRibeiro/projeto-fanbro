import { Request, Response } from "express";
import { ActivateUserUseCase } from "./ActivateUserUseCase";

export class ActivateUserController {
  async handle(request: Request, response: Response) {
    const { tokenActivate } = request.params;

    const activateUserCase = new ActivateUserUseCase();

    const result = await activateUserCase.execute(tokenActivate);
    return response.json(result);
  }
}
