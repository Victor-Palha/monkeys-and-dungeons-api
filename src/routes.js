import { Router } from "express";
import { AllMonstersController } from "./controllers/monsters/AllMonstersController.js";

const router = Router();
router.get("/monsters", new AllMonstersController().execute)

export { router };