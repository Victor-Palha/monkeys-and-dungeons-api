import { InMemorySpells } from "../../repositories/In-Memory/in-memory-spells-repository";
import { QuerySpellsService } from "../spells/Query-Spells-Service";

export function MakeQuerySpellsService(){
    const spellRepository = new InMemorySpells;

    const service = new QuerySpellsService(spellRepository);

    return service
}