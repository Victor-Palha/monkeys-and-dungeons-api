import { ItemsRepository } from "../../repositories/ItemsRepository";

export class AllItemsService{
    constructor(private itemRepository: ItemsRepository){}
    async execute(){
        return await this.itemRepository.AllItems()
    }
}