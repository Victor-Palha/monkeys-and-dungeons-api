import { Request, Response } from "express";
import { PHBSpells } from "../../models/spells/spells-phb";
import { TCESpells } from "../../models/spells/spells-tce";
import { XGESpells } from "../../models/spells/spells-xge";

class QuerySpellsController{
    execute(req:Request, res:Response){
        const { nome } = req.query;

        // Função para filtrar os monstros
        function querySpells(spellsArrays, nome){
            if(spellsArrays.spell.filter((spell) => {
                spell.name.includes(nome as string)
            }))
            
            return spellsArrays.spell.filter((spell) => spell.name.includes(nome as string));
        }
        //Função para retornar apenas os dados necessários
        function SpellList(spellList){
            return spellList.map((spell) => {
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
          
        
        const SpellsArray = [...SpellList(querySpells(PHBSpells, nome)), ...SpellList(querySpells(TCESpells, nome)), ...SpellList(querySpells(XGESpells, nome))]
        res.json(SpellsArray)
        
    }
}
export {QuerySpellsController}