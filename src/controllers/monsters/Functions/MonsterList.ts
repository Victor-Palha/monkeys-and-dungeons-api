import { UniqueMonsterImg } from "./UniqueList";

// Description: Função que retorna um array de monstros com as informações necessárias para a listagem
export function MonsterList(monsterList, monsterFluff){
  if(monsterList){
    return monsterList.map((monster) => {
      const uniqueMonsterImg = UniqueMonsterImg(monsterFluff, monster.name);
      const [{ image = false, ext = null } = {}] = uniqueMonsterImg.filter(obj => obj !== null && typeof obj === 'object');
      //console.log(image, ext)
      return {
        name: monster.name,
        source: monster.source,
        type: monster.type,
        cr: monster.cr,
        image: image,
        ext: ext
      };
    })
  }
}

// Description: Função para filtrar os dados
export function queryMonsters(monstersArrays, nome){
    if(monstersArrays.filter((monster) => {
        monster.name.toLowerCase().includes(nome.toLowerCase() as string)
    })){
      return monstersArrays.filter(monster => monster.name.toLowerCase().includes(nome.toLowerCase() as string));
    }
}