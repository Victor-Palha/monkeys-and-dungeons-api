import { Request, Response } from "express"
import { AllMonstersService } from "../../../services/monsters/All-Monsters-Service"
import { InMemoryMonsters } from "../../../repositories/In-Memory/in-memory-monsters-repository"

export class AllMonstersController{
    async execute(req:Request, res:Response){
        const {page} = req.query
        const allMonstersService = new AllMonstersService(new InMemoryMonsters)
        const allMonsters = await allMonstersService.execute(Number(page))

        return res.json(allMonsters)
    }
}