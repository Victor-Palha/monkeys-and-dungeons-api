import { Request, Response } from "express";
import { monstersMM } from "../../models/monsters/bestiary-mm";
import { VRGRMonsters } from "../../models/monsters/bestiary-vrgr";
import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";


class QueryMonstersController {
  execute(req: Request, res: Response) {
    const { nome } = req.query;

    function queryMonsters(monstersArrays, nome){
      if(monstersArrays.monster.filter(monster => monster.name.includes(nome as string))){
        return monstersArrays.monster.filter(monster => monster.name.includes(nome as string));
      }
    }

    const MonstersArray = [...queryMonsters(monstersMM, nome), ...queryMonsters(VRGRMonsters, nome), ...queryMonsters(bestiaryMPMM, nome)]

    return res.json(MonstersArray);
  }
}
export { QueryMonstersController };