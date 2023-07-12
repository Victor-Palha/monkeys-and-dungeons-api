import { Request, Response } from "express";
import { InMemorySpells } from "../../../repositories/In-Memory/in-memory-spells-repository";
import { QuerySpellsService } from "../../../services/spells/Query-Spells-Service";

export class QuerySpellsController{
  async execute(req:Request, res:Response){

    const querySpellsService = new QuerySpellsService(new InMemorySpells)

    const {search} = req.query

    const querySpells = await querySpellsService.execute(search as string)

    return res.json(querySpells)
  }
}