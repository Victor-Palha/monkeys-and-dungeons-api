import { InMemoryItems } from "../../repositories/In-Memory/in-memory-items-repository";
import { QueryItemsService } from "../items/Query-items-service";

export function MakeQueryItemsService() {
    const itemsRepository = new InMemoryItems();
    const service = new QueryItemsService(itemsRepository);
    
    return service;
}