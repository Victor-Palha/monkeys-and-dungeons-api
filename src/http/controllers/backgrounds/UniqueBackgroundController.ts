import { Request, Response } from "express";
import { MakeUniqueBackgroundService } from "../../../services/factories/make-unique-background-service";

export class UniqueBackgroundController{
    async execute(req:Request, res:Response){
        const { id } = req.params
        
        const service = MakeUniqueBackgroundService()
        
        const background = await service.execute(id)


        return res.json(background)
    }
}