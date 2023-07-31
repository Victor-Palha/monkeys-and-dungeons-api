import { InMemoryMonsters } from "../../repositories/In-Memory/in-memory-monsters-repository";
import { UniqueMonstersService } from "../monsters/Unique-Monsters-Service";

export function MakeUniqueMonstersService(){
    const monsterRepository = new InMemoryMonsters()

    const service = new UniqueMonstersService(monsterRepository)

    return service
}