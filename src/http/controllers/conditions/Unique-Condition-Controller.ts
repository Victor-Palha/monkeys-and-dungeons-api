import { Request, Response } from "express";
import { InMemoryConditionsRepository } from "../../../repositories/In-Memory/in-memory-conditions-repository";
import { UniqueConditionService } from "../../../services/conditions/Unique-condition-service";

export class UniqueConditionController{

    async execute(req:Request, res:Response){
        const { id } = req.params
        
        const inMemory = new InMemoryConditionsRepository()
        const service = new UniqueConditionService(inMemory)


        const condition = await service.execute(id)

        return res.json(condition)
    }
}