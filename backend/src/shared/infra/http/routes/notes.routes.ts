import { CreateNotesController } from "@modules/notes/createNotes/CreateNotesController";
import { ListNotesController } from "@modules/notes/listNotes/ListNotesController";
import { RemoveNotesController } from "@modules/notes/removeNotes/RemoveNotesController";
import { UpdateNotesController } from "@modules/notes/updateNotes/UpdateNotesController";
import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const notesRouter = Router();

const createNotesController = new CreateNotesController();
const listNotesController = new ListNotesController();
const updateNotesController = new UpdateNotesController();
const removeNotesController = new RemoveNotesController();

notesRouter.post("/", ensureAuthenticate, createNotesController.handle);
notesRouter.get("/", ensureAuthenticate, listNotesController.handle);
notesRouter.put("/:id", ensureAuthenticate, updateNotesController.handle);
notesRouter.delete("/:id", ensureAuthenticate, removeNotesController.handle);

export default notesRouter;
