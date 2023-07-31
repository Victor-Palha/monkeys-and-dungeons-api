import { Router } from "express";
import { AllItemsController } from "./GetAllItemsController";
import { QueryItemsController } from "./QueryItemsController";
import { UniqueItemController } from "./UniqueItemsController";

export const itemsRouter = Router();

itemsRouter
.get("/items", new AllItemsController().execute)
.get("/items/query", new QueryItemsController().execute)
.get("/items/:id", new UniqueItemController().execute)
