// Description: Função para retornar os dados únicos
export function UniqueMonsterImg(monsterList, nome){
    if(monsterList && nome){
        return monsterList.map((monster) => {
            if(monster.name.toLowerCase().includes(nome.toLowerCase() as string)){
                if(monster.images){
                    //console.log(monster.images[0].href.path.split('/').pop().split('.').pop())
                    return {
                        image: true,
                        ext: `.${monster.images[0].href.path.split('/').pop().split('.').pop()}`
                    }
                }else{
                    return {
                        image: false,
                        ext: null
                    };
                }
            }
        })
    }
}
// Description: Função para filtrar os dados
export function queryMonsterUnique(monstersArrays, nome: string, source: string) {
    const filteredMonsters = monstersArrays.filter((monster) => {
        const nameMatches = monster.name.includes(nome);
        const sourceMatches = monster.source.includes(source);
        console.log(nameMatches);
        return nameMatches && sourceMatches;
    });
    return filteredMonsters;
}