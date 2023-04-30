import { Request, Response } from "express";
import { UniqueMonstersService } from "../../../services/monsters/Unique-Monsters-Service";
import { InMemoryMonsters } from "../../../repositories/In-Memory/in-memory-monsters-repository";

export class UniqueMonsterController{
    async execute(req:Request, res:Response){
        const uniqueMonsterService = new UniqueMonstersService(new InMemoryMonsters)

        const Monster = await uniqueMonsterService.execute(req.params.id)

        return res.json(Monster)
    }
}