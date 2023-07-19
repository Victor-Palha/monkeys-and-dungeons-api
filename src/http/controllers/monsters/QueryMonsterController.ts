import { Request, Response } from "express";
import { QueryMonstersService } from "../../../services/monsters/Query-Monsters-Service";
import { InMemoryMonsters } from "../../../repositories/In-Memory/in-memory-monsters-repository";

export class QueryMonsterController{
    async execute(req:Request, res: Response){
        const { search } = req.query
        const queryMonsterService = new QueryMonstersService(new InMemoryMonsters)

        const monsters = await queryMonsterService.execute(search as string)

        return res.json(monsters)
    }
}