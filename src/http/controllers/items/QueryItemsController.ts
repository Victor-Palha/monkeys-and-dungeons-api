import { Query } from "../../../interfaces/Query";
import { InMemoryItems } from "../../../repositories/In-Memory/in-memory-items-repository";
import { QueryItemsService } from "../../../services/items/Query-items-service";
import { Request, Response } from "express";

export class QueryItemsController{
    async execute(req: Request<Query>, res: Response){
        const  query  = req.query as Query;

        const queryItensService = new QueryItemsService(new InMemoryItems);
        const items = await queryItensService.execute(query);

        return res.json(items);
    }
}