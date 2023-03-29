import { Request, Response } from "express";
import { spells } from "../../models/spells/spells";
import { querySpells, SpellList } from "./Functions/SpellList";

export interface Query{
    nome:string,
    classe:string,
    action:string,
    concentration: boolean,
    ritual: boolean,
    level: number,
    school: string
}

class QuerySpellsController{
    execute(req:Request, res:Response){
        const { nome, classe, action, concentration, ritual, level, school} = req.body as Query;

        res.json(SpellList(querySpells(spells.spell, {nome, classe, action, concentration, ritual, level, school})))
        
    }
}
export {QuerySpellsController}