import { InMemoryFeatsRepository } from "../../repositories/In-Memory/in-memory-feats-repository";
import { UniqueFeatService } from "../feats/unique-feat-service";

export function MakeUniqueFeatService(){
    const featsRepository = new InMemoryFeatsRepository()

    const service = new UniqueFeatService(featsRepository)

    return service
}