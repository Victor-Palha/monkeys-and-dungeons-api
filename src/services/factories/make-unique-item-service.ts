import { InMemoryItems } from "../../repositories/In-Memory/in-memory-items-repository";
import { UniqueItemService } from "../items/Unique-item-service";

export function MakeUniqueItenService(){
    const itemRepository = new InMemoryItems();

    const service = new UniqueItemService(itemRepository);

    return service;
}