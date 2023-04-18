import { Request, Response } from "express";
//import { spells } from "../../models/spells/spells";
import fs from "node:fs"
import { SpellList } from "./Functions/SpellList";
import { Spells } from "../../interfaces/Spells";

//const path = new URL("../../models/spells/spells.json", import.meta.url)

class AllSpellsController {
  async execute(req: Request, res: Response) {
    const spells:Spells = await JSON.parse(fs.readFileSync(__dirname + "/../../models/spells/spells.json").toString())
    res.json(SpellList(spells.spell));
  }
}
export { AllSpellsController }