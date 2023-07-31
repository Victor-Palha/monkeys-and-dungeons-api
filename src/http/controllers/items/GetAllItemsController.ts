import { MakeGetAllItemsService } from "../../../services/factories/make-all-items-service";
import { Request, Response } from "express";

export class AllItemsController{
    async execute(req:Request, res:Response){
        const service = MakeGetAllItemsService()
        const items = await service.execute()

        return res.json(items)
    }
}