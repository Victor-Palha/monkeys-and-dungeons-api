import { Request, Response } from "express";
// import {items} from "../../models/items/items";
import fs from "node:fs"
import { validName } from "./Functions/ItemsList";

class UniqueItemsController{
    execute(req:Request, res:Response){
        const {nome, source} = req.query
        const items = JSON.parse(fs.readFileSync("../../models/items/items").toString())
        
        const Item = items.item.filter(item => item.name == validName(nome) && item.source == source)
        return res.json(Item)
    }
}
export {UniqueItemsController}