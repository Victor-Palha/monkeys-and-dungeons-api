import { Request, Response } from "express";
import fs from "node:fs"
//chatGPT
import { generateDnDAdventure } from "../../../openai/ApiConfig";

//Body
//Cosmic
//Dark Fantasy

class GenerateAdventureController{
    async execute(req: Request, res: Response){
        const AdventureHorror = await JSON.parse(fs.readFileSync(__dirname + "/../../models/tables/VRGR/adventures/HorrorAdventure.json").toString())
        //Get Style
        const {type} = req.query
        
        if(type == undefined || type == null || type == "false"){
            return res.status(200).json("<h1>Choose Your Adventure!</h1>")
        }
        //Setando váriaveis 
        const villains = GenerateAdventureController.#GetHorrorMonster(AdventureHorror, `${type} Villains`)
        const monsters = GenerateAdventureController.#GetHorrorMonster(AdventureHorror, `${type} Monsters`)
        const settings = GenerateAdventureController.#GetHorrorMonster(AdventureHorror, `${type} Settings`)
        const plots = GenerateAdventureController.#GetHorrorMonster(AdventureHorror, `${type} Plots`)
        //Chat GPT
        
        await generateDnDAdventure({settings, plots, villains, monsters}).then((response) => {
            return res.json(response)
        }).catch((err)=>{
            return res.status(400).json({ error: err.message })
        })
    }
    // private methods
    static #rollDice(str: string) {
        const [, numSides] = str.split('d');
        return (Math.floor(Math.random() * Number(numSides)));
    }

    static #GetHorrorMonster(HorrorTable, name: string){
        let colLabelsArray = []
        let rowsArray = []
        HorrorTable.horror.map((table)=>{
            if(table.name === name){
                if(table.entries){
                    table.entries.map((entry)=>{
                        if(entry.type === "table"){
                            colLabelsArray.push(entry.colLabels[0])
                            rowsArray.push(...entry.rows)
                        }
                    })
                }
            }
        })
        if(colLabelsArray.includes("Challenge")){
            //console.log(rowsArray.length)
            return rowsArray[GenerateAdventureController.#rollDice(`d${rowsArray.length}`)]
        }
        return rowsArray[GenerateAdventureController.#rollDice(colLabelsArray[0])]
    }
    
}
export { GenerateAdventureController }