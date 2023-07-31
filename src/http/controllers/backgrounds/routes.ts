import { Router } from "express";
import { GetAllBackgroundsController } from "./GetAllBackgroundsController";
import { UniqueBackgroundController } from "./UniqueBackgroundController";


export const backgroundRouter = Router();

backgroundRouter
.get("/backgrounds", new GetAllBackgroundsController().execute)
.get("/backgrounds/:id", new UniqueBackgroundController().execute)