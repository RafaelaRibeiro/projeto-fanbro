import { AuthenticateUserController } from "@modules/accounts/useCases/authenticate/AuthenticateUserController";
import { Router } from "express";

const authRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authRouter.post("/", authenticateUserController.handle);

export default authRouter;
