import { InMemoryMonsters } from "../../repositories/In-Memory/in-memory-monsters-repository";
import { QueryMonstersService } from "../monsters/Query-Monsters-Service";

export function MakeQueryMonstersService(){
    const monstersRepository = new InMemoryMonsters()

    const service = new QueryMonstersService(monstersRepository)

    return service
}