import { Router } from "express";
import { GetAllFeatsController } from "./get-all-feats-controller";
import { UniqueFeatController } from "./UniqueFeatController";

export const featsRouter = Router();

featsRouter
.get("/feats", new GetAllFeatsController().execute)
.get("/feats/:id", new UniqueFeatController().execute)