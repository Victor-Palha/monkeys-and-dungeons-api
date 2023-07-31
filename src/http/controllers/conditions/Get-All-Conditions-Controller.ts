import { Request, Response } from "express";
import { MakeGetAllConditionsService } from "../../../services/factories/make-get-all-conditions-service";

export class GetAllConditionsController {

    async execute(req:Request, res:Response) {

        const service = MakeGetAllConditionsService()

        const conditions = await service.execute()

        return res.json(conditions)
    }
}