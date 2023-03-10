import { bestiaryMPMM } from "../../models/monsters/bestiary-mpmm";
import { Request, Response } from "express";

class MPMMonstersController{
    execute(req: Request, res: Response){
        const monsters = bestiaryMPMM.monster;
        return res.json(monsters);
    }
}
export {MPMMonstersController}