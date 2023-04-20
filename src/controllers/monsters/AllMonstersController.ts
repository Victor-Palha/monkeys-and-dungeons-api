import { Request, Response } from "express";
import { Query } from "../../interfaces/Spells";
import fs from "node:fs"
import { Monsters } from "../../interfaces/Monsters";

/* In this part of the code, the JSONs that i used i taked from D&D 5etools, and these JSONs ARE NOT organized.
 which makes it an almost impossible task for me to organize the Types*/

class AllMonstersController {
    //private attributes
    static #bestiary = {} as any
    static #fluffs = {} as any

    constructor(){
      let bestiaryMM = JSON.parse(fs.readFileSync(__dirname + "/../../models/monsters/bestiary-mm.json").toString())
      let bestiaryMPMM = JSON.parse(fs.readFileSync(__dirname + "/../../models/monsters/bestiary-mpmm.json").toString())
      let bestiaryVRGR = JSON.parse(fs.readFileSync(__dirname + "/../../models/monsters/bestiary-vrgr.json").toString())

      AllMonstersController.#bestiary = [...bestiaryMM.monster, ...bestiaryMPMM.monster, ...bestiaryVRGR.monster]

      let MMFluff = JSON.parse(fs.readFileSync(__dirname + "/../../models/monsters/fluff-bestiary-mm.json").toString())
      let MPMMFluff = JSON.parse(fs.readFileSync(__dirname + "/../../models/monsters/fluff-bestiary-mpmm.json").toString())
      let VRGRFluff = JSON.parse(fs.readFileSync(__dirname + "/../../models/monsters/fluff-bestiary-vrgr.json").toString())

      AllMonstersController.#fluffs = [...MMFluff.monster, ...MPMMFluff.monster, ...VRGRFluff.monster]

    }
    // Public methods
    static getMonsters(){
      return AllMonstersController.#bestiary
    }
    static getFluffs(){
      return AllMonstersController.#fluffs
    }
    AllMonsters(req:Request, res:Response){
        const monsters = AllMonstersController.getMonsters()
        const fluffs = AllMonstersController.getFluffs()

        return res.json([...AllMonstersController.#MonsterList(monsters, fluffs)])
        //   [...MonsterList(bestiaryMM.monster, MMFluff.monster), ...MonsterList(bestiaryMPMM.monster, MPMMFluff.monster), ...MonsterList(bestiaryVRGR.monster, VRGRFluff.monster)]
        // )
    }

    QueryMonsters(req:Request<Query>, res:Response){
        const {nome, type, cr, image, source } = req.query as Query;
        const monsters = AllMonstersController.getMonsters()
        const fluffs = AllMonstersController.getFluffs()

        return res.json(AllMonstersController.#MonsterList(AllMonstersController.#queryMonsters(monsters, {nome, type, cr, image, source} ), fluffs))
    }

    UniqueMonster(req: Request, res: Response){
        const { nome, source } = req.query;
        const monsters = AllMonstersController.getMonsters()

        return res.json(AllMonstersController.#queryMonsterUnique(monsters, nome as string, source as string))
    }

    // Private methods
    static #MonsterList(monsterList, monsterFluff){
      if(monsterList){
        return monsterList.map((monster) => {
          const uniqueMonsterImg = AllMonstersController.#UniqueMonsterImg(monsterFluff, monster.name);
          const [{ image = false, ext = null } = {}] = uniqueMonsterImg.filter(obj => obj !== null && typeof obj === 'object');
          //console.log(image, ext)
          return {
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
    static #queryMonsters(monstersArrays: any[],{nome, type, cr, image, source}: Query){
        const MonsterList: Monsters[] = AllMonstersController.#MonsterList(monstersArrays, AllMonstersController.getFluffs())
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
    static #UniqueMonsterImg(monsterList: any[], nome: string){
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

    static #queryMonsterUnique(monstersArrays, nome: string, source: string) {
      let image = AllMonstersController.#UniqueMonsterImg(AllMonstersController.getFluffs(), nome);
      image = image.filter(obj => obj !== null && typeof obj === 'object');
      //console.log(image)
      let filteredMonsters = monstersArrays.filter((monster) => {
          const nameMatches = monster.name === nome;
          const sourceMatches = monster.source.includes(source);
          //console.log(nameMatches);
          return nameMatches && sourceMatches;
      });
      //console.log(filteredMonsters)
      filteredMonsters[0].image = image[0].image;
      filteredMonsters[0].ext = image[0].ext;
      return filteredMonsters;
  }
}
export {AllMonstersController}