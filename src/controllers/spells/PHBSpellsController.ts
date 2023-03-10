import { PHBSpells } from "../../models/spells/spells-phb";
import { Request, Response } from "express";

class PHBSpellsController{
    execute(req: Request, res: Response){
        const spells = PHBSpells.spell;
        return res.json(spells);
    }
}
export {PHBSpellsController}