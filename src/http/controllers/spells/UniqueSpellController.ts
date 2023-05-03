import { Request, Response } from "express";
import { InMemorySpells } from "../../../repositories/In-Memory/in-memory-spells-repository";
import { UniqueSpellService } from "../../../services/spells/Unique-Spells-Service";

export class UniqueSpellsController{
  async execute(req:Request, res:Response){

    const uniqueSpellsService = new UniqueSpellService(new InMemorySpells)

    const uniqueSpells = await uniqueSpellsService.execute(req.params.id)

    return res.json(uniqueSpells)
  }
}