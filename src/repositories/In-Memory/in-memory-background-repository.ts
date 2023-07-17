import { CharacterBackground } from "../../interfaces/background";
import { BackgroundRepository } from "../BackgroundRepository";
import fs from 'fs'

export class InMemoryBackgroundRepository implements BackgroundRepository{
    private backgrounds: CharacterBackground[]

    constructor(){
        this.backgrounds = JSON.parse(fs.readFileSync(__dirname + "/../../models/backgrounds/backgrounds.json").toString())
    }

    async getAllBackgrounds() {
        
        return this.backgrounds
    }
    
}