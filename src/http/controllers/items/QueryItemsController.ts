import { MakeQueryItemsService } from "../../../services/factories/make-query-items-service";
import { Request, Response } from "express";

export class QueryItemsController{
    async execute(req: Request, res: Response){
        const {search} = req.query;

        const service = MakeQueryItemsService()
        const items = await service.execute(search as string);

        return res.json(items);
    }
}