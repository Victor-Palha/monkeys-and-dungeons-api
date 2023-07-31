import { MonsterTamplate, Monsters } from "../../interfaces/Monsters";
import { MonstersRepository } from "../MonstersRepository";
import fs from "fs"

export class InMemoryMonsters implements MonstersRepository{
    private Bestiary = [] as Monsters[]

    constructor(){
        this.Bestiary = JSON.parse(fs.readFileSync(__dirname + "/../../models/monsters/bestiary.json").toString())
    }

    async AllMonsters(page: number): Promise<MonsterTamplate[]> {

        const monsters = this.Bestiary.slice(page * 20 - 20, page * 20)

        return monsters.map((monster)=>{
            return {
                id: monster.id,
                name: monster.name,
                meta: monster.meta,
                Challenge: monster.Challenge,
                img_url: monster.img_url
            }
        })
    }
    
    async QueryMonsters(search: string): Promise<Monsters[]> {


        const monsters = this.Bestiary.filter((monster)=>{
            if(!search){
                return monster
            }
            if(monster.name.toLowerCase().includes(search.toLowerCase())){
                return monster
            }
            else if(monster.meta.toLowerCase().includes(search.toLowerCase())){
                return monster
            }
            else if(monster.Challenge.toLowerCase().includes(search.toLowerCase())){
                return monster
            }
        })

        return monsters.slice(0, 20)
    }

    async UniqueMonster(id: string): Promise<Monsters> {
        const monster = this.Bestiary.filter(monster => { 
            if(monster.id === id){
                return monster
            }
        })
        return monster[0]
    }
}