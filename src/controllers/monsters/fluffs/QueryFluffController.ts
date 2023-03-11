import {Request, Response} from "express";
import {MMFluff} from "../../../models/monsters/fluff-bestiary-mm";
import { MPMMFluff } from "../../../models/monsters/fluff-bestiary-mpmm";
import { VRGRFluff } from "../../../models/monsters/fluff-bestiary-vrgr";

class QueryFluffController{
    execute(req:Request, res:Response){
        const { nome, source } = req.query;

        function queryMonsters(monstersArrays, nome, source){
            if(monstersArrays.monsterFluff.filter((monster) => {
                monster.name.includes(nome as string)
            }) && monstersArrays.monsterFluff.filter((monster) => {
                monster.source.includes(source as string)
            }))
            return monstersArrays.monsterFluff.filter(monster => monster.name.includes(nome as string) && monster.source.includes(source as string));
          }

        const MonstersArray = [...queryMonsters(MMFluff, nome, source), ...queryMonsters(MPMMFluff, nome, source), ...queryMonsters(VRGRFluff, nome, source)]
        res.json(MonstersArray)
        }
    }

export {QueryFluffController}