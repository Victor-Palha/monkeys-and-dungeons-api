import { SpellsRepository } from "../../repositories/SpellsRepository";

export class QuerySpellsService{
    constructor(private spellRepository: SpellsRepository){}
    async execute(search: string){
        return await this.spellRepository.QuerySpells(search)
    }
}