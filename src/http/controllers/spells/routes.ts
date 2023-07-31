import { Router } from "express";
import { AllSpellsController } from "./AllSpellsController";
import { QuerySpellsController } from "./QuerySpellsController";
import { UniqueSpellsController } from "./UniqueSpellController";

export const spellsRouter = Router();

spellsRouter
.get("/spells", new AllSpellsController().execute)
.get("/spells/query", new QuerySpellsController().execute)
.get("/spells/:id", new UniqueSpellsController().execute)