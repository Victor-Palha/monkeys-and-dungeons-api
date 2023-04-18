import { Spell } from "../../../interfaces/Spells";
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
                school: spell.school,
            }
        })
    }
}

// Função para filtrar os dados
export function querySpells(spellList: Spell[], {nome, classe, action, concentration, ritual, level, school, source}: Query){
    
    //Convertendo os valores de concentration e ritual para boolean
    if(concentration === "false"){
        concentration = false;
    }else if(concentration === "true"){
        concentration = true;
    }else{
        concentration = undefined;
    }
    if(ritual === "false"){
        ritual = false;
    }else if(ritual === "true"){
        ritual = true;
    }else{
        ritual = undefined;
    }
    if(classe == ''){
        classe = undefined;
    }
    if(action == ''){
        action = undefined;
    }
    if(level == ''){
        level = undefined;
    }
    if(school == ''){
        school = undefined;
    }
    if(source == ''){
        source = undefined;
    }

    const filters = [
        (spell) => nome === undefined || spell.name.toLowerCase().includes(nome.toLowerCase()),
        (spell) => classe === undefined || spell.classes.includes(classe),
        (spell) => action === undefined || spell.casting_time.includes(action),
        (spell) => concentration === undefined || spell.duration.concentration === Boolean(concentration),
        (spell) => ritual === undefined || spell.ritual === Boolean(ritual),
        (spell) => level === undefined || spell.level === Number(level),
        (spell) => school === undefined || spell.school === school,
        (spell) => source === undefined || spell.source === source
    ];
    return spellList.filter(spell => filters.reduce((acc, filter) => acc && filter(spell), true));
}