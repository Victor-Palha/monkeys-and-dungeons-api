import { Query } from "../../interfaces/Query";
import { ItemsRepository } from "../../repositories/ItemsRepository";

export class QueryItemsService {
    constructor(private itemRepository: ItemsRepository) {}
    async execute(query: Query) {
        return await this.itemRepository.QueryItems(query)
    }
}