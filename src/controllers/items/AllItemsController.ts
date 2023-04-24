import {Request, Response} from "express";
import fs from "node:fs"
import { Items } from "../../interfaces/Itens";
import { Query } from "../../interfaces/Spells";
/*
types:
    * Armor
    * Wonderous
    * Weapon
    * Rod
    * Potion
    * Scroll
    * Ring
    * Staff
    * Wand
    * Wondrous
rarity:
    * uncommon
    * rare
    * very rare
    * legendary
    * artifact
*/

class AllItemsController {
    static #items = {} as Items[]

    constructor(){
        AllItemsController.#items = JSON.parse(fs.readFileSync(__dirname + "/../../models/items/items.json").toString())
    }

    static getItems(){
        return AllItemsController.#items
    }

    AllItems(req:Request, res:Response){
        return res.json(AllItemsController.getItems())
    }

    QueryItems(req:Request<Query>, res:Response){
        const {nome, type, rarity, requiresAttunement} = req.query as Query

        const items = AllItemsController.getItems()
        return res.json(AllItemsController.#QueryItemsList(items, {nome, type, rarity, requiresAttunement}))
    }

    UniqueItem(req:Request, res:Response){
        const {id} = req.params
        const items = AllItemsController.getItems()
        
        const Item = items.filter(item => item.id === id)
        return res.json(Item)
    }


    // Private methods
    
    static #QueryItemsList(itemArray: Items[], {nome, type, rarity, requiresAttunement}){
            if(requiresAttunement === "false"){
                requiresAttunement = false;
            }else if(requiresAttunement === "true"){
                requiresAttunement = true;
            }else{
                requiresAttunement = undefined;
            }
            if(type == ''){
                type = undefined;
            }
            if(rarity == ''){
                rarity = undefined;
            }
            if(nome == ''){
                nome = undefined;
            }

            const filters = [
                (item:Items) => nome === undefined || item.name.toLowerCase().includes(nome.toLowerCase()),
                (item:Items) => type === undefined || item.type.toLowerCase().includes(type.toLowerCase()),
                (item:Items) => rarity === undefined || item.rarity.toLowerCase().includes(rarity.toLowerCase()),
                (item:Items) => requiresAttunement === undefined || item.requiresAttunement === Boolean(requiresAttunement),
            ];
            return itemArray.filter(item => filters.reduce((acc, filter) => acc && filter(item), true));
        }
}
export {AllItemsController}