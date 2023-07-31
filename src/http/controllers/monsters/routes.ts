import { Router } from "express";
import { AllMonstersController } from "./AllMonstersController";
import { QueryMonsterController } from "./QueryMonsterController";
import { UniqueMonsterController } from "./UniqueMonsterController";

export const monstersRouter = Router();

monstersRouter
.get("/monsters", new AllMonstersController().execute)
.get("/monsters/query", new QueryMonsterController().execute)
.get("/monsters/:id", new UniqueMonsterController().execute)