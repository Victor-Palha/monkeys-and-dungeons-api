import { CharacterBackground } from "../../interfaces/background";
import { BackgroundRepository } from "../BackgroundRepository";
import fs from 'fs'

export class InMemoryBackgroundRepository implements BackgroundRepository{
    private backgrounds: CharacterBackground[]

    constructor(){
        this.backgrounds = JSON.parse(fs.readFileSync(__dirname + "/../../models/backgrounds/backgrounds.json").toString())
    }

    async uniqueBackground(id: string): Promise<CharacterBackground> {
        const background = this.backgrounds.find(background => background.id === id)

        return background
    }

    async getAllBackgrounds() {
        
        return this.backgrounds.map(background => {
            return {
                name: background.Classe,
                id: background.id,
                SkillProficiencies: background.SkillProficiencies,
                Source: background.Source
            }
        })
    }
    
}