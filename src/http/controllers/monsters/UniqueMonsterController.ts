import { Request, Response } from "express";
import { MakeUniqueMonstersService } from "../../../services/factories/make-unique-monsters-service";

export class UniqueMonsterController{
    async execute(req:Request, res:Response){
        const { id } = req.params
        const service = MakeUniqueMonstersService()

        const monster = await service.execute(id as string)

        return res.json(monster)
    }
}