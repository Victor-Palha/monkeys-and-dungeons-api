import { Router } from "express";
import { SearchClassController } from "./SearchClasseControllet";

export const classesRouter = Router();

classesRouter
.get("/classes", new SearchClassController().execute)