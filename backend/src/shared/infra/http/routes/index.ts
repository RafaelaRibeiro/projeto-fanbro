import { Router } from "express";
import authRouter from "./authenticate.routes";
import userRouter from "./users.routes";
import profileRouter from "./profile.routes";
import notesRoutes from "./notes.routes";
import connectionRouter from "./connections.routes";
import authorSpaceRouter from "./authorSpace.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/login", authRouter);
router.use("/profile", profileRouter);
router.use("/notes", notesRoutes);
router.use("/connections", connectionRouter);
router.use("/projects", authorSpaceRouter);

export { router };
