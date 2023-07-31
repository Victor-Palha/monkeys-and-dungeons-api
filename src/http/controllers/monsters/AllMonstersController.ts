import { Request, Response } from "express"
import { MakeAllMonstersService } from "../../../services/factories/make-all-monsters-service"

export class AllMonstersController{
    async execute(req:Request, res:Response){
        const {page} = req.query
        if(!page){
            return res.status(400).json({error: "Page is required"})
        } 
        const service = MakeAllMonstersService()
        const allMonsters = await service.execute(Number(page))

        return res.json(allMonsters)
    }
}