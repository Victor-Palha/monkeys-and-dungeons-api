// Description: Função que retorna um array de monstros com as informações necessárias para a listagem
export function MonsterList(monsterList){
  if(monsterList){
    return monsterList.map((monster) => {
      return {
        name: monster.name,
        source: monster.source,
        type: monster.type,
        cr: monster.cr
      };
    })
  }

}
// Description: Função para filtrar os dados
export function queryMonsters(monstersArrays, nome){
    if(monstersArrays.filter((monster) => {
        monster.name.toLowerCase().includes(nome.toLowerCase() as string)
    }))
    return monstersArrays.monster.filter(monster => monster.name.toLowerCase().includes(nome.toLowerCase() as string));
}