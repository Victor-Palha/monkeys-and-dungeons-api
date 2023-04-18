import { Request, Response } from "express";
// import {items} from "../../models/items/items";
import fs from "node:fs"
import { QueryItemsList, ItemsList } from "./Functions/ItemsList";

class QueryItemsController{
    execute(req:Request, res:Response){
        const {nome} = req.query
        const items = JSON.parse(fs.readFileSync("../../models/items/items").toString())
        
        const ItemsArray = ItemsList(QueryItemsList(items.item, nome))
        return res.json(ItemsArray)
    }
}
export {QueryItemsController}