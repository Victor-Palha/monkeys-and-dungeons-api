import { Request, Response } from "express";
import { InMemoryBackgroundRepository } from "../../../repositories/In-Memory/in-memory-background-repository";
import { UniqueBackgroundService } from "../../../services/backgrounds/Unique-background-service";

export class UniqueBackgroundController{
    async execute(req:Request, res:Response){
        const { id } = req.params
        
        const inMemoryBackgroundRepository = new InMemoryBackgroundRepository
        const service = new UniqueBackgroundService(inMemoryBackgroundRepository)
        
        const background = await service.execute(id)


        return res.json(background)
    }
}