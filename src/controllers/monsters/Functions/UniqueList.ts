// Description: Função para retornar os dados únicos
export function UniqueMonsterImg(monsterList){
    if(monsterList){
        return monsterList.map((monster) => {
            return {
                image: monster.images,
            };
        })
    }
}
// Description: Função para filtrar os dados
export function queryMonsterUnique(monstersArrays, nome, source){
    if(monstersArrays.monster.filter((monster) => {
        monster.name.toLowerCase().includes(nome.toLowerCase() as string) && monster.source.toLowerCase().includes(source.toLowerCase() as string)
    })){
        return monstersArrays.monster.filter(monster => monster.name.toLowerCase().includes(nome.toLowerCase() as string) && monster.source.toLowerCase().includes(source.toLowerCase() as string));
    }

}