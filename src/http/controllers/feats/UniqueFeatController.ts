import { Request, Response } from "express";
import { InMemoryFeatsRepository } from "../../../repositories/In-Memory/in-memory-feats-repository";
import { UniqueFeatService } from "../../../services/feats/unique-feat-service";

export class UniqueFeatController{
    async execute(req:Request, res:Response){
        const { id } = req.params

        const repositoryFeats = new InMemoryFeatsRepository()
        const feat = new UniqueFeatService(repositoryFeats)

        const uniqueFeat = await feat.execute(id)

        return res.json(uniqueFeat)
    }
}