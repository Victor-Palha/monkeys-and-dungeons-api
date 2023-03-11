import { Request, Response } from "express";
import { PHBSpells } from "../../models/spells/spells-phb";
import { TCESpells } from "../../models/spells/spells-tce";
import { XGESpells } from "../../models/spells/spells-xge";
import { SpellList } from "./Functions/SpellList";

class AllSpellsController {
  execute(req: Request, res: Response) {

    const spells = [...SpellList(PHBSpells), ...SpellList(TCESpells), ...SpellList(XGESpells)];
    res.json(spells);
  }
}
export { AllSpellsController }