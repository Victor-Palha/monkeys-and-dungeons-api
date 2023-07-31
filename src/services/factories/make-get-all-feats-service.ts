import { InMemoryFeatsRepository } from "../../repositories/In-Memory/in-memory-feats-repository";
import { GetAllFeatsService } from "../feats/get-all-feats-service";

export function MakeGetAllFeatsService() {
    const featsRepository = new InMemoryFeatsRepository();

    const service = new GetAllFeatsService(featsRepository);

    return service;
}