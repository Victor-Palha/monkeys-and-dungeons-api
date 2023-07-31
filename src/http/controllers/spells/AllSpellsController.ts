import { Request, Response } from "express";
import { MakeAllSpellsService } from "../../../services/factories/make-all-spells-service";

export class AllSpellsController{
  async execute(_req:Request, res:Response){
    const service = MakeAllSpellsService()

    const allSpells = await service.execute()

    return res.json(allSpells)
  }
}