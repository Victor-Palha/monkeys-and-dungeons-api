import { Request, Response } from "express";
import { bestiaryMM } from "../../models/monsters/bestiary-mm";
import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";
import { bestiaryVRGR } from "../../models/monsters/bestiary-vrgr";
import { MMFluff } from "../../models/monsters/fluff-bestiary-mm";
import { MPMMFluff } from "../../models/monsters/fluff-bestiary-mpmm";
import { VRGRFluff } from "../../models/monsters/fluff-bestiary-vrgr";
// Functions
import { MonsterList, queryMonsters } from "./Functions/MonsterList";

class QueryMonstersController{
    execute(req:Request, res:Response){
        const { nome } = req.query;

        res.json(
            [...MonsterList(queryMonsters(bestiaryMM.monster, nome), MMFluff.monster), ...MonsterList(queryMonsters(bestiaryMPMM.monster, nome), MPMMFluff.monster), ...MonsterList(queryMonsters(bestiaryVRGR.monster, nome), VRGRFluff.monster)]
        )

    }
}
export {QueryMonstersController}