import { InMemoryBackgroundRepository } from "../../repositories/In-Memory/in-memory-background-repository";
import { UniqueBackgroundService } from "../backgrounds/Unique-background-service";

export function MakeUniqueBackgroundService(){
    const backgroundRepository = new InMemoryBackgroundRepository()
    const service = new UniqueBackgroundService(backgroundRepository)

    return service
}