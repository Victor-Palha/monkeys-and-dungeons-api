import { Query } from "../../interfaces/Query";
import { MonstersRepository } from "../../repositories/MonstersRepository";

export class QueryMonstersService{
    constructor(private monsterRepository: MonstersRepository){}
    async execute(query: Query){
        return await this.monsterRepository.QueryMonsters(query)
    }
}