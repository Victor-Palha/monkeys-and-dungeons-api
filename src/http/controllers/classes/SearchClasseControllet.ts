import { InMemoryClassesRepository } from "../../../repositories/In-Memory/in-memoty-classes-repository"
import { SearchClassService } from "../../../services/classes/Search-Classe-Service"
import { Request, Response } from "express"

export class SearchClassController{
    async execute(req:Request, res:Response){
        const { classe } = req.query
    
        const searchService = new SearchClassService(new InMemoryClassesRepository)
    
        const classeSearch = await searchService.execute(classe as string)

        if(!classeSearch){
            return res.status(404).json({message: "Classe not found"})
        }
        return res.status(200).json(classeSearch)
    }
}