import { InMemoryItems } from "../../repositories/In-Memory/in-memory-items-repository";
import { AllItemsService } from "../items/All-Items-Service";

export function MakeGetAllItemsService() {
    const itemsRepository = new InMemoryItems();
    const service = new AllItemsService(itemsRepository);

    return service;
}