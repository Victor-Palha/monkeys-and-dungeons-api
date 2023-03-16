import { Request, Response } from "express";
import { bestiaryMM } from "../../models/monsters/bestiary-mm";
import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";
import { bestiaryVRGR } from "../../models/monsters/bestiary-vrgr";
import { MMFluff } from "../../models/monsters/fluff-bestiary-mm";
import { MPMMFluff } from "../../models/monsters/fluff-bestiary-mpmm";
import { VRGRFluff } from "../../models/monsters/fluff-bestiary-vrgr";
// Functions
import { MonsterList } from "./Functions/MonsterList";

class AllMonstersController {
    execute(req:Request, res:Response){

        return res.json(
          [...MonsterList(bestiaryMM.monster, MMFluff.monster), ...MonsterList(bestiaryMPMM.monster, MPMMFluff.monster), ...MonsterList(bestiaryVRGR.monster, VRGRFluff.monster)]
        )
    }
}
export {AllMonstersController}