import { Spell } from "../../../models/spells/spells";

// função para filtrar dados
export function QuerySpellUnique(spellList:Spell[], nome){
    if(spellList.filter((spell) => {
        spell.name === nome
    })){
        return spellList.filter(spell => spell.name === nome);
    }
}