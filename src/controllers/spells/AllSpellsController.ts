import { Request, Response } from "express";
import { spells } from "../../models/spells/spells";
import { SpellList } from "./Functions/SpellList";

class AllSpellsController {
  execute(req: Request, res: Response) {
    res.json(SpellList(spells.spell));
  }
}
export { AllSpellsController }