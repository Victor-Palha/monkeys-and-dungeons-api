import { InMemorySpells } from "../../repositories/In-Memory/in-memory-spells-repository";
import { UniqueSpellService } from "../spells/Unique-Spells-Service";

export function MakeUnniqueSpellsService(){
    const spellRepository = new InMemorySpells;

    const service = new UniqueSpellService(spellRepository);

    return service
}