import { CreateChapterController } from "@modules/authorSpace/createChapter/CreateChapterController";
import { CreateProjectController } from "@modules/authorSpace/createProject/CreateProjectController";
import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const authorSpaceRouter = Router();

const createProjectController = new CreateProjectController();
const createChapterController = new CreateChapterController();

authorSpaceRouter.post("/", ensureAuthenticate, createProjectController.handle);
authorSpaceRouter.post(
  "/:id/chapter",
  ensureAuthenticate,
  createChapterController.handle
);
export default authorSpaceRouter;
