import { InMemoryItems } from "../../../repositories/In-Memory/in-memory-items-repository";
import { AllItemsService } from "../../../services/items/All-Items-Service";
import { Request, Response } from "express";

export class AllItemsController{
    async execute(req:Request, res:Response){
        const allItemsService = new AllItemsService(new InMemoryItems())
        const items = await allItemsService.execute()

        return res.json(items)
    }
}