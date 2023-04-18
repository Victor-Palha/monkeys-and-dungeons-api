import { Request, Response } from "express";
//import { spells } from "../../models/spells/spells";
import fs from "node:fs"
import { QuerySpellUnique } from "./Functions/UniqueList";
import { Spells } from "../../interfaces/Spells";
interface Query{
    nome?:string
}
class UniqueSpellsController{
    async execute(req:Request<Query>, res:Response){
        const spells:Spells = await JSON.parse(fs.readFileSync("../../models/spells/spells.json").toString())
        const {nome} = req.query as Query;
        
        res.json(QuerySpellUnique(spells.spell, nome))
    }
}
export { UniqueSpellsController }