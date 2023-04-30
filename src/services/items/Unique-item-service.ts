import { ItemsRepository } from "../../repositories/ItemsRepository";

export class UniqueItemService {
    constructor(private itemRepository: ItemsRepository) {}
    async execute(id: string){
        return await this.itemRepository.UniqueItem(id)
    }
}