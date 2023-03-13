import { Request, Response } from "express";
import { BodyHorror } from "../../models/tables/VRGR/Body Horror/BodyHorror";
import { GetHorrorMonster} from "./Function/HorrorFunctions";
//chatGPT
import { generateDnDAdventure } from "../openai/ApiConfig";

//Body Horror Monsters
//Body Horror Villains
//Body Horror Torments
//Body Horror Settings
//Body Horror Plots

class BodyHorrorTableController{
    async execute(req: Request, res: Response){
        //Setando váriaveis
        const villains = GetHorrorMonster(BodyHorror, "Body Horror Villains")
        const monsters = GetHorrorMonster(BodyHorror, "Body Horror Monsters")
        const settings = GetHorrorMonster(BodyHorror, "Body Horror Settings")
        const plots = GetHorrorMonster(BodyHorror, "Body Horror Plots")
        //Chat GPT
        await generateDnDAdventure({settings, plots, villains, monsters}).then((response) => {
            return res.json(response)
        }).catch((err)=>{
            return res.status(400).json(err)
        })
    }
}
export { BodyHorrorTableController }