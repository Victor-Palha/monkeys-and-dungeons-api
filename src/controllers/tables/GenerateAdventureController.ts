import { Request, Response } from "express";
import fs from "node:fs"
//import { AdventureHorror } from "../../models/tables/VRGR/adventures/HorrorAdventure";
import { GetHorrorMonster} from "./Function/HorrorFunctions";
//chatGPT
import { generateDnDAdventure } from "../../openai/ApiConfig";

//Body
//Cosmic
//Dark Fantasy

class GenerateAdventureController{
    async execute(req: Request, res: Response){
        const AdventureHorror = await JSON.parse(fs.readFileSync("../../models/tables/VRGR/adventures/HorrorAdventure.json").toString())
        //Get Style
        const {type} = req.query
        
        if(type == undefined || type == null || type == "false"){
            return res.status(200).json("<h1>Choose Your Adventure!</h1>")
        }
        //Setando váriaveis 
        const villains = GetHorrorMonster(AdventureHorror, `${type} Villains`)
        const monsters = GetHorrorMonster(AdventureHorror, `${type} Monsters`)
        const settings = GetHorrorMonster(AdventureHorror, `${type} Settings`)
        const plots = GetHorrorMonster(AdventureHorror, `${type} Plots`)
        //Chat GPT
        
        await generateDnDAdventure({settings, plots, villains, monsters}).then((response) => {
            return res.json(response)
        }).catch((err)=>{
            return res.status(400).json({ error: err.message })
        })
    }
}
export { GenerateAdventureController }