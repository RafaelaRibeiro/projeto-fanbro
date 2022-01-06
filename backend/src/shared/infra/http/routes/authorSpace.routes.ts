import { CreateChapterController } from "@modules/authorSpace/createChapter/CreateChapterController";
import { CreateProjectController } from "@modules/authorSpace/createProject/CreateProjectController";
import { DeleteChapterController } from "@modules/authorSpace/deleteChapter/DeleteChapterController";
import { ListPrivateProjectsController } from "@modules/authorSpace/listPrivateProjects/ListPrivateProjectsController";
import { ListPublicProjectsController } from "@modules/authorSpace/listPublicProjects/ListPublicProjectsController";
import { UpdateChapterController } from "@modules/authorSpace/updateChapter/UpdateChapterController";
import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const authorSpaceRouter = Router();

const createProjectController = new CreateProjectController();
const createChapterController = new CreateChapterController();
const deleteChapterController = new DeleteChapterController();
const updateChapterController = new UpdateChapterController();
const listPrivateProjectsController = new ListPrivateProjectsController();
const listPublicProjectsController = new ListPublicProjectsController();

authorSpaceRouter.post("/", ensureAuthenticate, createProjectController.handle);
authorSpaceRouter.post(
  "/:id/chapter",
  ensureAuthenticate,
  createChapterController.handle
);
authorSpaceRouter.put(
  "/chapter/:id/delete",
  ensureAuthenticate,
  deleteChapterController.handle
);
authorSpaceRouter.put(
  "/chapter/:id/update",
  ensureAuthenticate,
  updateChapterController.handle
);

authorSpaceRouter.get(
  "/private",
  ensureAuthenticate,
  listPrivateProjectsController.handle
);
authorSpaceRouter.get(
  "/public",
  ensureAuthenticate,
  listPublicProjectsController.handle
);
export default authorSpaceRouter;
