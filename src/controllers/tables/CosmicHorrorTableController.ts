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

class CosmicHorrorTableController{
    async execute(req: Request, res: Response){
        //Setando váriaveis
        const villains = GetHorrorMonster(AdventureHorror, "Cosmic Horror Villains")
        const monsters = GetHorrorMonster(AdventureHorror, "Cosmic Horror Monsters")
        const settings = GetHorrorMonster(AdventureHorror, "Cosmic Horror Settings")
        const plots = GetHorrorMonster(AdventureHorror, "Cosmic Horror Plots")
        //Chat GPT
        await generateDnDAdventure({settings, plots, villains, monsters}).then((response) => {
            return res.json(response)
        }).catch((err)=>{
            return res.status(400).json(err)
        })
    }
}
export { CosmicHorrorTableController }