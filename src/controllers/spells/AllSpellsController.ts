import { Request, Response } from "express";
import { PHBSpells } from "../../models/spells/spells-phb";
import { TCESpells } from "../../models/spells/spells-tce";
import { XGESpells } from "../../models/spells/spells-xge";

class AllSpellsController {
  execute(req: Request, res: Response) {

    //Função para retornar apenas os dados necessários
    function SpellList(spellList){
      return spellList.spell.map((spell) => {
        return {
          name: spell.name,
          source: spell.source,
          level: spell.level,
          school: spell.school,
          components: spell.components,
          duration: spell.duration
        };
      })
    }
    
    const spells = [...SpellList(PHBSpells), ...SpellList(TCESpells), ...SpellList(XGESpells)];
    res.json(spells);
  }
}
export { AllSpellsController }