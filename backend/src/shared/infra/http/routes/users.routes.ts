import { ActivateUserController } from "@modules/accounts/useCases/activateUser/ActivateUserController";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

import { Router } from "express";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";
const userRouter = Router();
import multer from "multer";
import multerConfig from "src/config/upload";
const upload = multer(multerConfig).single("file");

const createUserController = new CreateUserController();
const activateuUserController = new ActivateUserController();
const updateUserController = new UpdateUserController();

userRouter.post("/register", createUserController.handle);
userRouter.put("/activate/:tokenActivate", activateuUserController.handle);
userRouter.put("/update", ensureAuthenticate, updateUserController.handle);

export default userRouter;
