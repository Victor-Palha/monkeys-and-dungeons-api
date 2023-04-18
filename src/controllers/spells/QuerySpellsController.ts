import { Request, Response } from "express";
//import { spells } from "../../models/spells/spells";
import fs from "node:fs"
import { querySpells, SpellList } from "./Functions/SpellList";
import { Spell, Spells } from "../../interfaces/Spells";

export interface Query{
    nome?:string,
    classe?:string,
    action?:string,
    concentration?: boolean | string,
    ritual?: boolean | string,
    level?: number | string,
    school?: string,
    source?: string
}

class QuerySpellsController{
    async execute(req:Request, res:Response){
        const spells:Spells = await JSON.parse(fs.readFileSync("../../models/spells/spells.json").toString())
        const { nome, classe, action, concentration, ritual, level, school, source} = req.query as Query;

        res.json(SpellList(querySpells(spells.spell, {nome, classe, action, concentration, ritual, level, school, source})))
        
    }
}
export {QuerySpellsController}