import { Router } from "express";
import { GetAllConditionsController } from "./Get-All-Conditions-Controller";
import { UniqueConditionController } from "./Unique-Condition-Controller";

export const conditionsRouter = Router();

conditionsRouter
.get("/conditions", new GetAllConditionsController().execute)
.get("/conditions/:id", new UniqueConditionController().execute)