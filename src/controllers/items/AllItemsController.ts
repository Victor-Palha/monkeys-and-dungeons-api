import {Request, Response} from "express";
import {items} from "../../models/items/items";
import { ItemsList } from "./Functions/ItemsList";

class AllItemsController {
    execute(req:Request, res:Response){
        //console.log(items)
        return res.json(ItemsList(items))
    }
}
export {AllItemsController}