import { TCESpells } from "../../models/spells/spells-tce";
import { Request, Response } from "express";

class TCESpellsController{
    execute(req: Request, res: Response){
        const spells = TCESpells.spell;
        return res.json(spells);
    }
}
export {TCESpellsController}