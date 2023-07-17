import { Request, Response } from "express";
import { InMemoryBackgroundRepository } from "../../../repositories/In-Memory/in-memory-background-repository";
import { GetAllBackgroundsService } from "../../../services/backgrounds/Get-all-backgrounds-service";

export class GetAllBackgroundsController{
    async execute(req: Request, res: Response){
        const backgroundRepository = new InMemoryBackgroundRepository()
        const service = new GetAllBackgroundsService(backgroundRepository)

        const backgrounds = await service.execute()

        return res.status(200).json(backgrounds)
    }
}