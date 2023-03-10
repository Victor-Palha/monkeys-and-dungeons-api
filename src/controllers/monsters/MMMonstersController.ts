import { Request, Response } from "express";
import { monstersMM } from "../../models/monsters/bestiary-mm";


class MMMonstersController{
    execute(req: Request, res: Response){
        const monsters = monstersMM.monster;
        return res.json(monsters);
    }
}

export {MMMonstersController}