import { Request, Response } from "express";
import { UniqueItemService } from "../../../services/items/Unique-item-service";
import { InMemoryItems } from "../../../repositories/In-Memory/in-memory-items-repository";

export class UniqueItemController{
    async execute(req: Request, res:Response){
        const uniqueItemController = new UniqueItemService(new InMemoryItems)

        const item = await uniqueItemController.execute(req.params.id)

        return res.json(item)
    }
}