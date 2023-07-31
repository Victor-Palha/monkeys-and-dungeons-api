import { Request, Response } from "express"
import { MakeSearchClasseService } from "../../../services/factories/make-search-classe-service"

export class SearchClassController{
    async execute(req:Request, res:Response){
        const { classe } = req.query
    
        const service = MakeSearchClasseService()
    
        const classeSearch = await service.execute(classe as string)

        if(!classeSearch){
            return res.status(404).json({message: "Classe not found"})
        }
        return res.status(200).json(classeSearch)
    }
}