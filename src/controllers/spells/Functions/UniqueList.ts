
// função para filtrar dados
export function QuerySpellUnique(spellList, nome, source){
    if(spellList.spell.filter((spell) => {
        spell.name.includes(nome as string) && spell.source.includes(source as string)
    })){
        return spellList.spell.filter(spell => spell.name.includes(nome as string) && spell.source.includes(source as string));
    }
}