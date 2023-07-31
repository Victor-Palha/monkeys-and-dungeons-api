import { Request, Response } from "express";
import { MakeUniqueFeatService } from "../../../services/factories/make-unique-feat-service";

export class UniqueFeatController{
    async execute(req:Request, res:Response){
        const { id } = req.params

        const service = MakeUniqueFeatService()

        const uniqueFeat = await service.execute(id)

        return res.json(uniqueFeat)
    }
}