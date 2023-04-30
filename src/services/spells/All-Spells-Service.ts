import { SpellsRepository } from "../../repositories/SpellsRepository";

export class AllSpellsService{
    constructor(private spellRepository: SpellsRepository){}
    async execute(){
        return await this.spellRepository.AllSpells()
    }
}