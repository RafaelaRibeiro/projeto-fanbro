import { FollowUserController } from "@modules/connections/followUser/FollowUserController";
import { ListFollowersController } from "@modules/connections/listFollowers/ListFollowersController";
import { ListFollowingController } from "@modules/connections/listFollowing/ListFollowingController";
import { UnfollowController } from "@modules/connections/unfollow/UnfollowController";
import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const connectionRouter = Router();

const followUserController = new FollowUserController();
const listFollowersController = new ListFollowersController();
const listFollowingController = new ListFollowingController();
const unfollowController = new UnfollowController();

connectionRouter.post("/", ensureAuthenticate, followUserController.handle);
connectionRouter.get(
  "/followers",
  ensureAuthenticate,
  listFollowersController.handle
);
connectionRouter.get(
  "/following",
  ensureAuthenticate,
  listFollowingController.handle
);

connectionRouter.delete(
  "/unfollow",
  ensureAuthenticate,
  unfollowController.handle
);

export default connectionRouter;
