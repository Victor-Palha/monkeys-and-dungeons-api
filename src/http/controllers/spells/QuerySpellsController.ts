import { Request, Response } from "express";
import { MakeQuerySpellsService } from "../../../services/factories/make-query-spells-service";

export class QuerySpellsController{
  async execute(req:Request, res:Response){
    const {search} = req.query

    const service = MakeQuerySpellsService()

    const querySpells = await service.execute(search as string)

    return res.json(querySpells)
  }
}