import { Request, Response } from "express";
// import { MMFluff } from "../../models/monsters/fluff-bestiary-mm";
// import { MPMMFluff } from "../../models/monsters/fluff-bestiary-mpmm";
// import { VRGRFluff } from "../../models/monsters/fluff-bestiary-vrgr";
// import { bestiaryMM } from "../../models/monsters/bestiary-mm";
// import { bestiaryVRGR } from "../../models/monsters/bestiary-vrgr";
// import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";
import fs from "node:fs"
//Functions
import { queryMonsterUnique, UniqueMonsterImg } from "./Functions/UniqueList";

export class UniqueMonstersController{
    execute(req:Request, res:Response){
        const { nome, source } = req.query;
        const bestiaryMM = JSON.parse(fs.readFileSync("../../models/monsters/bestiary-mm.json").toString())
        const bestiaryMPMM = JSON.parse(fs.readFileSync("../../models/monsters/bestiary-mpmm.json").toString())
        const bestiaryVRGR = JSON.parse(fs.readFileSync("../../models/monsters/bestiary-vrgr.json").toString())
        const MMFluff = JSON.parse(fs.readFileSync("../../models/monsters/fluff-bestiary-mm.json").toString())
        const MPMMFluff = JSON.parse(fs.readFileSync("../../models/monsters/fluff-bestiary-mpmm.json").toString())
        const VRGRFluff = JSON.parse(fs.readFileSync("../../models/monsters/fluff-bestiary-vrgr.json").toString())

        return res.json([
            ...queryMonsterUnique(bestiaryMM.monster, nome as string, source as string),
            ...queryMonsterUnique(bestiaryMPMM.monster, nome as string, source as string),
            ...queryMonsterUnique(bestiaryVRGR.monster, nome as string, source as string)
        ])
    }
}