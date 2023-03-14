import { Request, Response } from "express";
import { items } from "../../models/items/items";

class UniqueItemsController{
    execute(req:Request, res:Response){
        const {nome, source} = req.query
        const Item = items.item.filter(item => item.name == nome)
        return res.json(Item)
    }
}
export {UniqueItemsController}