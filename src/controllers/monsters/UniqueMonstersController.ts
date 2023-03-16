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
            ...UniqueMonsterImg(queryMonsterUnique(MMFluff, nome, source)),
            ...UniqueMonsterImg(queryMonsterUnique(MPMMFluff, nome, source)),
            ...UniqueMonsterImg(queryMonsterUnique(VRGRFluff, nome, source)),
            ...queryMonsterUnique(bestiaryMM, nome, source),
            ...queryMonsterUnique(bestiaryMPMM, nome, source),
            ...queryMonsterUnique(bestiaryVRGR, nome, source)
        ])
    }
}