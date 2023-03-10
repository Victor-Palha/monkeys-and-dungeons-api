import { XGESpells } from "../../models/spells/spells-xge";
import { Request, Response } from "express";

class XGESpellsController{
    execute(req: Request, res: Response){
        const spells = XGESpells.spell;
        return res.json(spells);
    }
}
export {XGESpellsController}