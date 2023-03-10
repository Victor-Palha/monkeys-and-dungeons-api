import { Request, Response } from "express";
import { monstersMM } from "../../models/monsters/bestiary-mm";
import { VRGRMonsters } from "../../models/monsters/bestiary-vrgr";
import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";

class QueryMonstersController {
  execute(req: Request, res: Response) {
    const { nome } = req.query;
    const MonstersMM = []
    const MonstersVRGT = []
    const MonstersMPMM = []
    monstersMM.monster.filter(monster => monster.name.includes(nome as string)) ? MonstersMM.push(monstersMM.monster.filter(monster => monster.name.includes(nome as string))) : null;
    VRGRMonsters.monster.filter(monster => monster.name.includes(nome as string)) ? MonstersVRGT.push(VRGRMonsters.monster.filter(monster => monster.name.includes(nome as string))) : null;
    bestiaryMPMM.monster.filter(monster => monster.name.includes(nome as string)) ? MonstersMPMM.push(bestiaryMPMM.monster.filter(monster => monster.name.includes(nome as string))) : null;
    const MonstersArray = [...MonstersMM, ...MonstersVRGT, ...MonstersMPMM]
    return res.json(MonstersArray);
  }
}
export { QueryMonstersController };