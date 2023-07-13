import { ClasseInterface } from "../../interfaces/classes";
import { ClassesRepository } from "../ClassesRepository";
import fs from "fs"

export class InMemoryClassesRepository implements ClassesRepository{
    private barbarian: ClasseInterface
    private bard: ClasseInterface
    private cleric: ClasseInterface
    constructor(){
        this.barbarian = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/barbarian.json").toString())
        this.bard = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/bard.json").toString())
        this.cleric = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/cleric.json").toString())
    }
    
    async ClasseSearch(classe: string): Promise<ClasseInterface> {
        switch(classe){
            case "barbarian":
                return this.barbarian
            case "bard":
                return this.bard
            case "cleric":
                return this.cleric
            default:
                return null
        }
    }
}