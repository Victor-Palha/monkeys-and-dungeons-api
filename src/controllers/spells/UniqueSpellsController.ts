import { Request, Response } from "express";
import { PHBSpells } from "../../models/spells/spells-phb";
import { TCESpells } from "../../models/spells/spells-tce";
import { XGESpells } from "../../models/spells/spells-xge";
import { QuerySpellUnique } from "./Functions/UniqueList";

class UniqueSpellsController{
    execute(req:Request, res:Response){
        const {nome, source} = req.query;

        const spell = [...QuerySpellUnique(PHBSpells, nome, source), ...QuerySpellUnique(TCESpells, nome, source), ...QuerySpellUnique(XGESpells, nome, source)]
        res.json(spell)
    }
}
export { UniqueSpellsController }