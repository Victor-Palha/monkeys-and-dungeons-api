import {Request, Response} from "express";
import {MMFluff} from "../../../models/monsters/fluff-bestiary-mm";
import { MPMMFluff } from "../../../models/monsters/fluff-bestiary-mpmm";
import { VRGRFluff } from "../../../models/monsters/fluff-bestiary-vrgr";

class AllFluffController{
    execute(req:Request, res:Response){
        // Adicionando todos os fluffs em um array
        const fluff = [...MMFluff.monsterFluff, ...MPMMFluff.monsterFluff, ...VRGRFluff.monsterFluff]
        res.json(fluff)
    }
}
export {AllFluffController}