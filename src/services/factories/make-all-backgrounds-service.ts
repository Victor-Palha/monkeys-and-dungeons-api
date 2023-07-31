import { InMemoryBackgroundRepository } from "../../repositories/In-Memory/in-memory-background-repository";
import { GetAllBackgroundsService } from "../backgrounds/Get-all-backgrounds-service";

export function MakeAllBackgroundService(){
    const backgroundRepository = new InMemoryBackgroundRepository()
    const service = new GetAllBackgroundsService(backgroundRepository)

    return service
}