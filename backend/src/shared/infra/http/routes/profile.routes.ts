import { ListProfileController } from "@modules/profiles/useCases/listProfile/ListProfileController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { Router } from "express";
const profileRouter = Router();

const listProfileController = new ListProfileController();

profileRouter.get(
  "/:user_id",
  ensureAuthenticate,
  listProfileController.handle
);

export default profileRouter;
