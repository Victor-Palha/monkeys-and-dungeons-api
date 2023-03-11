import { Request, Response } from "express";
import { PHBSpells } from "../../models/spells/spells-phb";
import { TCESpells } from "../../models/spells/spells-tce";
import { XGESpells } from "../../models/spells/spells-xge";
import { SpellList, querySpells } from "./Functions/SpellList";

class QuerySpellsController{
    execute(req:Request, res:Response){
        const { nome } = req.query;

        const SpellsArray = [...SpellList(querySpells(PHBSpells, nome)), ...SpellList(querySpells(TCESpells, nome)), ...SpellList(querySpells(XGESpells, nome))]
        res.json(SpellsArray)
        
    }
}
export {QuerySpellsController}