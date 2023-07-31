import { Items } from "../../interfaces/Itens";
import { ItemsRepository } from "../ItemsRepository";
import fs from "fs"

export class InMemoryItems implements ItemsRepository {
    private Items: Items[] = []

    constructor(){
        this.Items = JSON.parse(fs.readFileSync(__dirname + "/../../models/items/items.json").toString())
    }

    async AllItems() {
        return this.Items
    }

    async QueryItems(search: string) {
        const itemList = this.Items.filter(item => {
            if(item.name.toLowerCase().includes(search.toLowerCase())){
                return item
            }
            else if(item.rarity.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return item
            }
            else if(item.type.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return item
            }
        })

        return itemList
    }

    async UniqueItem(id: string){
        const items = this.Items.filter(item => item.id === id)
        return items[0]
    }
}