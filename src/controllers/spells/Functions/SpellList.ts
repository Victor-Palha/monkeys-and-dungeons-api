import { Spell } from "../../../models/spells/spells";
import { Query } from "../QuerySpellsController";

//Função para retornar apenas os dados necessários
export function SpellList(spellList:Spell[]){
    if(spellList){
        return spellList.map((spell) => {
            return {
                name: spell.name,
                source: spell.source,
                level: spell.level,
                ritual: spell.ritual,
                concentration: spell.duration.concentration,
                classes: spell.classes,
            }
        })
    }
}

// Função para filtrar os dados
export function querySpells(spellList: Spell[], {nome, classe, action, concentration, ritual, level}: Query){
    const filters = [
        (spell) => nome === undefined || spell.name.toLowerCase().includes(nome.toLowerCase()),
        (spell) => classe === undefined || spell.classes.includes(classe),
        (spell) => action === undefined || spell.casting_time.includes(action),
        (spell) => concentration === undefined || spell.duration.concentration === concentration,
        (spell) => ritual === undefined || spell.ritual === ritual,
        (spell) => level === undefined || spell.level === level
    ];
    return spellList.filter(spell => filters.reduce((acc, filter) => acc && filter(spell), true));
}