import { Query } from "../../interfaces/Query";
import { Spells, SpellsReturn } from "../../interfaces/Spells";
import { SpellsRepository } from "../SpellsRepository";
import fs from "fs"

export class InMemorySpells implements SpellsRepository{
    private Spells: Spells[] = []
    constructor(){
        this.Spells = JSON.parse(fs.readFileSync(__dirname + "/../../models/spells/spells.json").toString())
    }

    async AllSpells(): Promise<SpellsReturn[]> {
        return this.Spells.map((spell) => {
            return {
                id: spell.id,
                name: spell.name,
                source: spell.source,
                level: spell.level,
                ritual: spell.ritual,
                concentration: spell.duration.concentration,
                classes: spell.classes,
                school: spell.school,
            }
        })
    }
    async QuerySpells({nome, classe, action, concentration, ritual, level, school, source}: Query): Promise<SpellsReturn[]> {
        if(concentration === "false"){
            concentration = false;
        }else if(concentration === "true"){
            concentration = true;
        }else{
            concentration = undefined;
        }
        if(ritual === "false"){
            ritual = false;
        }else if(ritual === "true"){
            ritual = true;
        }else{
            ritual = undefined;
        }
        if(classe == ''){
            classe = undefined;
        }
        if(action == ''){
            action = undefined;
        }
        if(level == ''){
            level = undefined;
        }
        if(school == ''){
            school = undefined;
        }
        if(source == ''){
            source = undefined;
        }
    
        const filters = [
            (spell:Spells) => nome === undefined || spell.name.toLowerCase().includes(nome.toLowerCase()),
            (spell:Spells) => classe === undefined || spell.classes.includes(classe),
            (spell:Spells) => action === undefined || spell.casting_time.includes(action),
            (spell:Spells) => concentration === undefined || spell.duration.concentration === Boolean(concentration),
            (spell:Spells) => ritual === undefined || spell.ritual === Boolean(ritual),
            (spell:Spells) => level === undefined || spell.level === Number(level),
            (spell:Spells) => school === undefined || spell.school === school,
            (spell:Spells) => source === undefined || spell.source === source
        ]
        const spellList = this.Spells.filter(spell => filters.reduce((acc, filter) => acc && filter(spell), true))
        return spellList.map((spell) => {
            return {
                id: spell.id,
                name: spell.name,
                source: spell.source,
                level: spell.level,
                ritual: spell.ritual,
                concentration: spell.duration.concentration,
                classes: spell.classes,
                school: spell.school,
            }
        })
    }
    async UniqueSpell(id: string): Promise<Spells[]> {
        return this.Spells.filter(spell => spell.id === id)
    }
}