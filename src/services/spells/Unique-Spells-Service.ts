import { SpellsRepository } from "../../repositories/SpellsRepository";

export class UniqueSpellService {
    constructor(private spellRepository: SpellsRepository) { }
    async execute(id: string) {
        return await this.spellRepository.UniqueSpell(id);
    }
}