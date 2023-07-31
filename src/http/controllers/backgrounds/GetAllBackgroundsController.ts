import { Request, Response } from "express";
import { MakeAllBackgroundService } from "../../../services/factories/make-all-backgrounds-service";

export class GetAllBackgroundsController{
    async execute(_req: Request, res: Response){
        const service = MakeAllBackgroundService()

        const backgrounds = await service.execute()

        return res.status(200).json(backgrounds)
    }
}