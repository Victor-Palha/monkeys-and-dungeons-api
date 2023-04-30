import { Items } from "../../interfaces/Itens";
import { Query } from "../../interfaces/Query";
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

    async QueryItems({nome, type, rarity, requiresAttunement}: Query) {

        if(requiresAttunement === "false"){
            requiresAttunement = false
        }else if(requiresAttunement === "true"){
            requiresAttunement = true
        }else{
            requiresAttunement = undefined
        }
        if(type == ''){
            type = undefined
        }
        if(rarity == ''){
            rarity = undefined
        }
        if(nome == ''){
            nome = undefined
        }

        const filters = [
            (item:Items) => nome === undefined || item.name.toLowerCase().includes(nome.toLowerCase()),
            (item:Items) => type === undefined || item.type.toLowerCase().includes(type.toLowerCase()),
            (item:Items) => rarity === undefined || item.rarity.toLowerCase().includes(rarity.toLowerCase()),
            (item:Items) => requiresAttunement === undefined || item.requiresAttunement === Boolean(requiresAttunement),
        ]

        return this.Items.filter(item => filters.reduce((acc, filter) => acc && filter(item), true))
    }

    async UniqueItem(id: string){
        return this.Items.filter(item => item.id === id)
    }
}