import { Request, Response } from "express";
import { AdventureHorror } from "../../models/tables/VRGR/adventures/HorrorAdventure";
import { GetHorrorMonster} from "./Function/HorrorFunctions";
//chatGPT
import { generateDnDAdventure } from "../../openai/ApiConfig";

//Horror Monsters
//Horror Villains
//Horror Torments
//Horror Settings
//Horror Plots

class GenerateAdventureController{
    async execute(req: Request, res: Response){
        //Get Style
        const {type} = req.body
        //Setando váriaveis
        const villains = GetHorrorMonster(AdventureHorror, `${type} Villains`)
        const monsters = GetHorrorMonster(AdventureHorror, `${type} Monsters`)
        const settings = GetHorrorMonster(AdventureHorror, `${type} Settings`)
        const plots = GetHorrorMonster(AdventureHorror, `${type} Plots`)
        //Chat GPT
        
        await generateDnDAdventure({settings, plots, villains, monsters}).then((response) => {
            return res.json(response)
        }).catch((err)=>{
            return res.status(400).json(err)
        })
        //return res.json({settings, plots, villains, monsters})
    }
}
export { GenerateAdventureController }