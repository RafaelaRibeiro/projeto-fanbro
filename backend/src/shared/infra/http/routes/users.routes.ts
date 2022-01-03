import { ActivateUserController } from "@modules/accounts/useCases/activateUser/ActivateUserController";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

import { Router } from "express";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";
const userRouter = Router();
import multer from "multer";
import multerConfig from "src/config/upload";
import { UpdatePasswordController } from "@modules/accounts/useCases/updatePassword/UpdatePasswordController";
const upload = multer(multerConfig).single("file");

const createUserController = new CreateUserController();
const activateuUserController = new ActivateUserController();
const updateUserController = new UpdateUserController();
const updatePasswordController = new UpdatePasswordController();

userRouter.post("/register", createUserController.handle);
userRouter.put("/activate/:tokenActivate", activateuUserController.handle);
userRouter.put("/", ensureAuthenticate, updateUserController.handle);
userRouter.put(
  "/password",
  ensureAuthenticate,
  updatePasswordController.handle
);

export default userRouter;
