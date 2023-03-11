//Função para retornar apenas os dados necessários
export function SpellList(spellList){
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
// Função para filtrar os dados
export function querySpells(spellsArrays, nome){
    if(spellsArrays.spell.filter((spell) => {
        spell.name.includes(nome as string)
    }))
    
    return spellsArrays.spell.filter((spell) => spell.name.includes(nome as string));
}