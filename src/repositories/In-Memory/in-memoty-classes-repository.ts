import { ClasseInterface } from "../../interfaces/classes";
import { ClassesRepository } from "../ClassesRepository";
import fs from "fs"

export class InMemoryClassesRepository implements ClassesRepository{
    private barbarian: ClasseInterface
    private bard: ClasseInterface
    private cleric: ClasseInterface
    private druid: ClasseInterface
    private fighter: ClasseInterface
    private monk: ClasseInterface
    private paladin: ClasseInterface
    private ranger: ClasseInterface
    private rogue: ClasseInterface
    private sorcerer: ClasseInterface
    private warlock: ClasseInterface
    private wizard: ClasseInterface
    constructor(){
        this.barbarian = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/barbarian.json").toString())
        this.bard = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/bard.json").toString())
        this.cleric = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/cleric.json").toString())
        this.druid = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/druid.json").toString())
        this.fighter = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/fighter.json").toString())
        this.monk = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/monk.json").toString())
        this.paladin = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/paladin.json").toString())
        this.ranger = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/ranger.json").toString())
        this.rogue = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/rogue.json").toString())
        this.sorcerer = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/sorcerer.json").toString())
        this.warlock = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/warlock.json").toString())
        this.wizard = JSON.parse(fs.readFileSync(__dirname + "/../../models/classes/wizard.json").toString())
    }
    
    async ClasseSearch(classe: string): Promise<ClasseInterface> {
        switch(classe){
            case "barbarian":
                return this.barbarian
            case "bard":
                return this.bard
            case "cleric":
                return this.cleric
            case "druid":
                return this.druid
            case "fighter":
                return this.fighter
            case "monk":
                return this.monk
            case "paladin":
                return this.paladin
            case "ranger":
                return this.ranger
            case "rogue":
                return this.rogue
            case "sorcerer":
                return this.sorcerer
            case "warlock":
                return this.warlock
            case "wizard":
                return this.wizard
            default:
                return null
        }
    }
}