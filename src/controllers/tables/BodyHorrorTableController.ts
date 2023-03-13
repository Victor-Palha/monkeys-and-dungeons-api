import { Request, Response } from "express";
import { AdventureHorror } from "../../models/tables/VRGR/Body Horror/HorrorAdventure";
import { GetHorrorMonster} from "./Function/HorrorFunctions";
//chatGPT
import { generateDnDAdventure } from "../../openai/ApiConfig";

//Horror Monsters
//Horror Villains
//Horror Torments
//Horror Settings
//Horror Plots

class BodyHorrorTableController{
    async execute(req: Request, res: Response){
        //Setando váriaveis
        const villains = GetHorrorMonster(AdventureHorror, "Body Horror Villains")
        const monsters = GetHorrorMonster(AdventureHorror, "Body Horror Monsters")
        const settings = GetHorrorMonster(AdventureHorror, "Body Horror Settings")
        const plots = GetHorrorMonster(AdventureHorror, "Body Horror Plots")
        //Chat GPT
        await generateDnDAdventure({settings, plots, villains, monsters}).then((response) => {
            return res.json(response)
        }).catch((err)=>{
            return res.status(400).json(err)
        })
    }
}
export { BodyHorrorTableController }