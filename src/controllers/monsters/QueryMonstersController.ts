import { Request, Response } from "express";
// import { bestiaryMM } from "../../models/monsters/bestiary-mm";
// import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";
// import { bestiaryVRGR } from "../../models/monsters/bestiary-vrgr";
// import { MMFluff } from "../../models/monsters/fluff-bestiary-mm";
// import { MPMMFluff } from "../../models/monsters/fluff-bestiary-mpmm";
// import { VRGRFluff } from "../../models/monsters/fluff-bestiary-vrgr";
import fs from "node:fs"
// Functions
import { MonsterList, queryMonsters } from "./Functions/MonsterList";

class QueryMonstersController{
    execute(req:Request, res:Response){
        const { nome } = req.query;
        const bestiaryMM = JSON.parse(fs.readFileSync("../../models/monsters/bestiary-mm.json").toString())
        const bestiaryMPMM = JSON.parse(fs.readFileSync("../../models/monsters/bestiary-mpmm.json").toString())
        const bestiaryVRGR = JSON.parse(fs.readFileSync("../../models/monsters/bestiary-vrgr.json").toString())
        const MMFluff = JSON.parse(fs.readFileSync("../../models/monsters/fluff-bestiary-mm.json").toString())
        const MPMMFluff = JSON.parse(fs.readFileSync("../../models/monsters/fluff-bestiary-mpmm.json").toString())
        const VRGRFluff = JSON.parse(fs.readFileSync("../../models/monsters/fluff-bestiary-vrgr.json").toString())

        res.json(
            [...MonsterList(queryMonsters(bestiaryMM.monster, nome), MMFluff.monster), ...MonsterList(queryMonsters(bestiaryMPMM.monster, nome), MPMMFluff.monster), ...MonsterList(queryMonsters(bestiaryVRGR.monster, nome), VRGRFluff.monster)]
        )

    }
}
export {QueryMonstersController}