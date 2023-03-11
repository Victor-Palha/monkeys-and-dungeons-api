import { Request, Response } from "express";
import { bestiaryMM } from "../../models/monsters/bestiary-mm";
import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";
import { bestiaryVRGR } from "../../models/monsters/bestiary-vrgr";
// Functions
import { MonsterList } from "./Functions/MonsterList";

class AllMonstersController {
    execute(req:Request, res:Response){

        return res.json(
          [...MonsterList(bestiaryMM), ...MonsterList(bestiaryMPMM), ...MonsterList(bestiaryVRGR)]
        )
    }
}
export {AllMonstersController}