import { Spells, SpellsReturn } from "../../interfaces/Spells";
import { SpellsRepository } from "../SpellsRepository";
import fs from "fs"

export class InMemorySpells implements SpellsRepository{
    private Spells: Spells[] = []
    constructor(){
        this.Spells = JSON.parse(fs.readFileSync(__dirname + "/../../models/spells/spells.json").toString())
    }

    async AllSpells(): Promise<SpellsReturn[]> {
        const spells = this.Spells.map((spell) => {
            return {
                id: spell.id,
                name: spell.name,
                source: spell.source,
                level: spell.level,
                ritual: spell.ritual,
                concentration: spell.duration.concentration,
                classes: spell.classes,
                school: spell.school,
                time: spell.casting_time,
                range: spell.range,
            }
        })
        return spells
    }
    async QuerySpells(search: string){

        const spellList = this.Spells.filter(spell => {
            if(spell.name.toLowerCase().includes(search.toLowerCase())){
                return spell
            }
            else if(spell.casting_time === (search)){
                return spell
            }
            else if(spell.level === Number(search)){
                return spell
            }
            else if(spell.school.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return spell
            }
            else if(spell.source.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return spell
            }
        })

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
                time: spell.casting_time,
                range: spell.range,
            }
        })
    }
    async UniqueSpell(id: string){
        const spell = this.Spells.filter(spell => spell.id === id)
        return spell[0]
    }
}