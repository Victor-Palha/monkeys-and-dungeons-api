import { Request, Response } from "express";
import { MakeUniqueConditionService } from "../../../services/factories/make-unique-condition-service";

export class UniqueConditionController{

    async execute(req:Request, res:Response){
        const { id } = req.params
        
        const service = MakeUniqueConditionService()


        const condition = await service.execute(id)

        return res.json(condition)
    }
}