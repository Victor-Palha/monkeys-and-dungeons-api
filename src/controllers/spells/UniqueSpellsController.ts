import { Request, Response } from "express";
import { spells } from "../../models/spells/spells";
import { QuerySpellUnique } from "./Functions/UniqueList";
interface Query{
    nome?:string
}
class UniqueSpellsController{
    execute(req:Request<Query>, res:Response){
        const {nome} = req.query as Query;
        
        res.json(QuerySpellUnique(spells.spell, nome))
    }
}
export { UniqueSpellsController }