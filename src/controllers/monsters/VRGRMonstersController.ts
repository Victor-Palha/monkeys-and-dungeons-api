import { VRGRMonsters } from "../../models/monsters/bestiary-vrgr";
import { Request, Response } from "express";

class VRGRMonstersController{
    execute(req: Request, res: Response){
        const monsters = VRGRMonsters.monster;
        return res.json(monsters);
    }
}
export {VRGRMonstersController}