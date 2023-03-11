import { Request, Response } from "express";
import { MMFluff } from "../../../models/monsters/fluff-bestiary-mm";
import { MPMMFluff } from "../../../models/monsters/fluff-bestiary-mpmm";
import { VRGRFluff } from "../../../models/monsters/fluff-bestiary-vrgr";
import { monstersMM } from "../../../models/monsters/bestiary-mm";
import { VRGRMonsters } from "../../../models/monsters/bestiary-vrgr";
import { bestiaryMPMM } from "../../../models/monsters/bestiary-mpmm";


class UniqueFluffController{
    execute(req:Request, res:Response){
        const { nome, source } = req.query;
        // Função para filtrar os fluffs
        function queryMonsters(monstersArrays, nome, source){
            if(monstersArrays.monsterFluff.filter((monster) => {
                monster.name.includes(nome as string)
            }) && monstersArrays.monsterFluff.filter((monster) => {
                monster.source.includes(source as string)
            }))
            return monstersArrays.monsterFluff.filter(monster => monster.name.includes(nome as string) && monster.source.includes(source as string));
          }
          // Função para filtrar os monstros
          function queryMonstersInfo(monstersArrays, nome, source){
            if(monstersArrays.monster.filter(monster => {monster.name.includes(nome as string)
            }) && monstersArrays.monster.filter(monster => {
                monster.source.includes(source as string)
            }))
              return monstersArrays.monster.filter(monster => monster.name.includes(nome as string) && monster.source.includes(source as string));
            
          }
        // Adicionando todos os Monstros em um array
        const MonstersArrayInfo = [...queryMonstersInfo(monstersMM, nome, source), ...queryMonstersInfo(VRGRMonsters, nome, source), ...queryMonstersInfo(bestiaryMPMM, nome, source)]
        // Adicionando todos os fluffs em um array
        const MonstersArray = [...queryMonsters(MMFluff, nome, source), ...queryMonsters(MPMMFluff, nome, source), ...queryMonsters(VRGRFluff, nome, source)]

        res.json([MonstersArray, MonstersArrayInfo])
    }
}

export {UniqueFluffController}