import { ActivateUserController } from "@modules/accounts/useCases/activateUser/ActivateUserController";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { Router } from "express";
const userRouter = Router();

const createUserController = new CreateUserController();
const activateuUserController = new ActivateUserController();

userRouter.post("/register", createUserController.handle);
userRouter.put("/activate/:tokenActivate", activateuUserController.handle);

export default userRouter;
