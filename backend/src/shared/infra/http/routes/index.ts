import { Router } from "express";
import authRouter from "./authenticate.routes";
import userRouter from "./users.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/login", authRouter);

export { router };
