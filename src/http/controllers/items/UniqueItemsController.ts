import { Request, Response } from "express";
import { MakeUniqueItenService } from "../../../services/factories/make-unique-item-service";

export class UniqueItemController{
    async execute(req: Request, res:Response){
        const service = MakeUniqueItenService()

        const item = await service.execute(req.params.id)

        return res.json(item)
    }
}