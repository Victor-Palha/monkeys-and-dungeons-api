import { ItemsRepository } from "../../repositories/ItemsRepository";

export class QueryItemsService {
    constructor(private itemRepository: ItemsRepository) {}
    async execute(search: string) {
        return await this.itemRepository.QueryItems(search)
    }
}