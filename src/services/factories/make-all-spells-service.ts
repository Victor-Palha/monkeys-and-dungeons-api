import { InMemorySpells } from "../../repositories/In-Memory/in-memory-spells-repository";
import { AllSpellsService } from "../spells/All-Spells-Service";

export function MakeAllSpellsService(){
    const spellRepository = new InMemorySpells;
    const spell = new AllSpellsService(spellRepository);

    return spell
}