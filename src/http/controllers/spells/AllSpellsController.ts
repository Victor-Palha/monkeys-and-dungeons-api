import { Request, Response } from "express";
import { InMemorySpells } from "../../../repositories/In-Memory/in-memory-spells-repository";
import { AllSpellsService } from "../../../services/spells/All-Spells-Service";

export class AllSpellsController{
  async execute(req:Request, res:Response){
    const allSpellsService = new AllSpellsService(new InMemorySpells)

    const allSpells = await allSpellsService.execute()

    return res.json(allSpells)
  }
}