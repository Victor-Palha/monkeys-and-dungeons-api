import { Request, Response } from "express";
import { bestiaryMM } from "../../models/monsters/bestiary-mm";
import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";
import { bestiaryVRGR } from "../../models/monsters/bestiary-vrgr";
// Functions
import { MonsterList, queryMonsters } from "./Functions/MonsterList";

class QueryMonstersController{
    execute(req:Request, res:Response){
        const { nome } = req.query;

        res.json(
            [...MonsterList(queryMonsters(bestiaryMM.monster, nome)), ...MonsterList(queryMonsters(bestiaryMPMM.monster, nome)), ...MonsterList(queryMonsters(bestiaryVRGR.monster, nome))]
        )

    }
}
export {QueryMonstersController}