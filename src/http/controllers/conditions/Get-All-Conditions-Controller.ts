import { Request, Response } from "express";
import { GetAllConditionsService } from "../../../services/conditions/Get-all-conditions-service";
import { InMemoryConditionsRepository } from "../../../repositories/In-Memory/in-memory-conditions-repository";

export class GetAllConditionsController {

    async execute(req:Request, res:Response) {
        const inMemory = new InMemoryConditionsRepository()
        const service = new GetAllConditionsService(inMemory)

        const conditions = await service.execute()

        return res.json(conditions)
    }
}