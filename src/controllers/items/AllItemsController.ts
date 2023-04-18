import {Request, Response} from "express";
// import {items} from "../../models/items/items";
import fs from "node:fs"
import { ItemsList } from "./Functions/ItemsList";

class AllItemsController {
    execute(req:Request, res:Response){
        //console.log(items)
        const items = JSON.parse(fs.readFileSync("../../models/items/items").toString())
        return res.json(ItemsList(items.item))
    }
}
export {AllItemsController}