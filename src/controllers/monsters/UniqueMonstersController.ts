import { Request, Response } from "express";
import { MMFluff } from "../../models/monsters/fluff-bestiary-mm";
import { MPMMFluff } from "../../models/monsters/fluff-bestiary-mpmm";
import { VRGRFluff } from "../../models/monsters/fluff-bestiary-vrgr";
import { bestiaryMM } from "../../models/monsters/bestiary-mm";
import { bestiaryVRGR } from "../../models/monsters/bestiary-vrgr";
import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";
//Functions
import { queryMonsterUnique, UniqueMonsterImg } from "./Functions/UniqueList";

export class UniqueMonstersController{
    execute(req:Request, res:Response){
        const { nome, source } = req.query;

        return res.json([
            ...queryMonsterUnique(bestiaryMM.monster, nome as string, source as string),
            ...queryMonsterUnique(bestiaryMPMM.monster, nome as string, source as string),
            ...queryMonsterUnique(bestiaryVRGR.monster, nome as string, source as string)
        ])
    }
}