import { Query } from "../../interfaces/Query";
import { SpellsRepository } from "../../repositories/SpellsRepository";

export class QuerySpellsService{
    constructor(private spellRepository: SpellsRepository){}
    async execute(query: Query){
        return await this.spellRepository.QuerySpells(query)
    }
}