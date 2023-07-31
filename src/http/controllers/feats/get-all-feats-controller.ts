import { Request, Response } from "express";
import { MakeGetAllFeatsService } from "../../../services/factories/make-get-all-feats-service";

export class GetAllFeatsController{
    async execute(_req: Request, res: Response){
        
        const service = MakeGetAllFeatsService()

        const feats = await service.execute()

        return res.json(feats)
    }
}