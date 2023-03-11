import {Request, Response} from "express";
import {MMFluff} from "../../../models/monsters/fluff-bestiary-mm";
import { MPMMFluff } from "../../../models/monsters/fluff-bestiary-mpmm";
import { VRGRFluff } from "../../../models/monsters/fluff-bestiary-vrgr";

class QueryFluffController{
    execute(req:Request, res:Response){
        const { nome } = req.query;

        function queryMonsters(monstersArrays, nome){
            if(monstersArrays.monsterFluff.filter((monster) => {
                monster.name.includes(nome as string)
            }))
            
            return monstersArrays.monsterFluff.filter(monster => monster.name.includes(nome as string));
          }

        const MonstersArray = [...queryMonsters(MMFluff, nome), ...queryMonsters(MPMMFluff, nome), ...queryMonsters(VRGRFluff, nome)]
        res.json(MonstersArray)
        }
    }

export {QueryFluffController}