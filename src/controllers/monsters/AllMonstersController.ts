import { Request, Response } from "express";
// import { bestiaryMM } from "../../models/monsters/bestiary-mm";
// import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";
// import { bestiaryVRGR } from "../../models/monsters/bestiary-vrgr";
// import { MMFluff } from "../../models/monsters/fluff-bestiary-mm";
// import { MPMMFluff } from "../../models/monsters/fluff-bestiary-mpmm";
// import { VRGRFluff } from "../../models/monsters/fluff-bestiary-vrgr";
import fs from "node:fs"
// Functions
import { MonsterList } from "./Functions/MonsterList";

class AllMonstersController {
    execute(req:Request, res:Response){
        const bestiaryMM = JSON.parse(fs.readFileSync("../../models/monsters/bestiary-mm.json").toString())
        const bestiaryMPMM = JSON.parse(fs.readFileSync("../../models/monsters/bestiary-mpmm.json").toString())
        const bestiaryVRGR = JSON.parse(fs.readFileSync("../../models/monsters/bestiary-vrgr.json").toString())
        const MMFluff = JSON.parse(fs.readFileSync("../../models/monsters/fluff-bestiary-mm.json").toString())
        const MPMMFluff = JSON.parse(fs.readFileSync("../../models/monsters/fluff-bestiary-mpmm.json").toString())
        const VRGRFluff = JSON.parse(fs.readFileSync("../../models/monsters/fluff-bestiary-vrgr.json").toString())
        return res.json(
          [...MonsterList(bestiaryMM.monster, MMFluff.monster), ...MonsterList(bestiaryMPMM.monster, MPMMFluff.monster), ...MonsterList(bestiaryVRGR.monster, VRGRFluff.monster)]
        )
    }
}
export {AllMonstersController}