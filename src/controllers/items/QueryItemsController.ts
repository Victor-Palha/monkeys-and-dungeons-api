import { Request, Response } from "express";
import { items } from "../../models/items/items";
import { QueryItemsList, ItemsList } from "./Functions/ItemsList";

class QueryItemsController{
    execute(req:Request, res:Response){
        const {nome} = req.query

        const ItemsArray = ItemsList(QueryItemsList(items.item, nome))
        return res.json(ItemsArray)
    }
}
export {QueryItemsController}