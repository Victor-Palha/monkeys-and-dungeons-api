import { Monsters } from "../../interfaces/Monsters";
import { Query } from "../../interfaces/Query";
import { MonstersRepository } from "../MonstersRepository";
import fs from "fs"

export class InMemoryMonsters implements MonstersRepository{
    private Bestiary = [] as any
    private BestiaryFluff = [] as any

    constructor(){
        let bestiaryMM = JSON.parse(fs.readFileSync(__dirname + "/../../models/monsters/bestiary-mm.json").toString())

        this.Bestiary = [...bestiaryMM]

        let MMFluff = JSON.parse(fs.readFileSync(__dirname + "/../../models/monsters/fluff-bestiary-mm.json").toString())

        this.BestiaryFluff = [...MMFluff.monster]
    }

    async AllMonsters(page: number): Promise<Monsters[]> {
        const monsters = this.MonsterList(this.Bestiary, this.BestiaryFluff).slice(page * 20 - 20, page * 20)
        return monsters
    }
    
    async QueryMonsters(query: Query): Promise<Monsters[]> {

        return this.MonsterList(this.QueryMonstersMethod(this.Bestiary, query), this.BestiaryFluff)
    }

    async UniqueMonster(id: string): Promise<any> {
        return this.queryMonsterUnique(this.Bestiary, id)
    }

    // Private methods

    private MonsterList(monsterList, monsterFluff): Monsters[]{
    //console.log(monsterList)
    if(monsterList){
        return monsterList.map((monster) => {
        const uniqueMonsterImg = this.UniqueMonsterImg(monsterFluff, monster.name);
        const [{ image = false, ext = null } = {}] = uniqueMonsterImg.filter(obj => obj !== null && typeof obj === 'object');
        //console.log(image, ext)
        return {
            id: monster.id,
            name: monster.name,
            source: monster.source,
            type: monster.type,
            cr: monster.cr,
            image: image,
            ext: ext
        };
        })
    }
    }
      
    // Description: Função para filtrar os dados
    private QueryMonstersMethod(monstersArrays: any[],{nome, type, cr, image, source}: Query){
        //console.log(nome, type, cr, image, source)
        const MonsterList: Monsters[] = this.MonsterList(monstersArrays, this.BestiaryFluff)
            //Convertendo os valores de image para boolean
        if(image === 'false'){
        image = false;
        }else if(image === 'true'){
            image = true;
        }else{
            image = undefined;
        }
        
        if(nome === ''){
        nome = undefined;
        }
        if(type === ''){
            type = undefined;
        }
        if(cr === ''){
            cr = undefined;
        }
        if(source === ''){
        source = undefined;
        }
        
        const filters = [
            (monster: Monsters) => nome === undefined || monster.name.toLowerCase().includes(nome.toLowerCase()),
            (monster: Monsters) => source === undefined || monster.source.toLowerCase() === source.toLowerCase(),
            (monster: Monsters) => type === undefined || monster.type === type.toLowerCase(),
            (monster: Monsters) => cr === undefined || monster.cr === cr,
            (monster: Monsters) => image === undefined || monster.image === image,
        ];
        return MonsterList.filter(monster => filters.reduce((acc, filter) => acc && filter(monster), true));
    }
    // Monster Image
    private UniqueMonsterImg(monsterList: any[], nome: string){
    if(monsterList && nome){
        return monsterList.map((monster) => {
            if(monster.name.toLowerCase().includes(nome.toLowerCase() as string)){
                if(monster.images){
                    return {
                        image: true,
                        ext: `.${monster.images[0].href.path.split('/').pop().split('.').pop()}`
                    }
                }else{
                    return {
                        image: false,
                        ext: null
                    };
                }
            }
        })
    }
    }
  
    private queryMonsterUnique(monstersArrays, id: string) {
  
        let filteredMonsters = monstersArrays.filter((monster) => {
            return monster.id === id
        });
  
        //Get Image
        let image = this.UniqueMonsterImg(this.BestiaryFluff, filteredMonsters[0].name);
        image = image.filter(obj => obj !== null && typeof obj === 'object');
  
        filteredMonsters[0].image = image[0].image;
        filteredMonsters[0].ext = image[0].ext;
        return filteredMonsters;
    }
}