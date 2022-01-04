import { Router } from "express";
import authRouter from "./authenticate.routes";
import userRouter from "./users.routes";
import profileRouter from "./profile.routes";
import notesRoutes from "./notes.routes";
import connectionRouter from "./connections.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/login", authRouter);
router.use("/profile", profileRouter);
router.use("/notes", notesRoutes);
router.use("/connections", connectionRouter);

export { router };
