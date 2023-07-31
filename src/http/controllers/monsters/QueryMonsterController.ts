import { Request, Response } from "express";
import { MakeQueryMonstersService } from "../../../services/factories/make-query-monsters-service";

export class QueryMonsterController{
    async execute(req:Request, res: Response){
        const { search } = req.query
        const service = MakeQueryMonstersService()

        const monsters = await service.execute(search as string)

        return res.json(monsters)
    }
}