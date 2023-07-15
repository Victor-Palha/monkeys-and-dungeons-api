import { Request, Response } from "express";
import { GetAllFeatsService } from "../../../services/feats/get-all-feats-service";
import { InMemoryFeatsRepository } from "../../../repositories/In-Memory/in-memory-feats-repository";

export class GetAllFeatsController{
    async execute(req: Request, res: Response){
        const repositoryFeats = new InMemoryFeatsRepository()
        const getAllFeatsService = new GetAllFeatsService(repositoryFeats)

        const feats = await getAllFeatsService.execute()

        return res.json(feats)
    }
}