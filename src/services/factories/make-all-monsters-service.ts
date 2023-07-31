import { InMemoryMonsters } from "../../repositories/In-Memory/in-memory-monsters-repository";
import { AllMonstersService } from "../monsters/All-Monsters-Service";

export function MakeAllMonstersService() {
    const monstersRepository = new InMemoryMonsters();
    const service = new AllMonstersService(monstersRepository);
    return service;
}