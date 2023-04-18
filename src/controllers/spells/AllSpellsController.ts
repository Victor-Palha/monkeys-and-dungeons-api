import { Request, Response } from "express";
import { Query, Spell, Spells } from "../../interfaces/Spells";
import fs from "node:fs"


class AllSpellsController {
  static #spells = {} as Spells

  constructor(){
    AllSpellsController.#spells = JSON.parse(fs.readFileSync(__dirname + "/../../models/spells/spells.json").toString())
    //console.log(this.spells)
  }

  static getSpells(): Spells{
    return AllSpellsController.#spells
  }
  
  AllSpells(req: Request, res: Response) {
    const spells = AllSpellsController.getSpells()
    res.json(AllSpellsController.#SpellList(spells.spell));
  }

  QuerySpells(req:Request, res:Response){
    const spells = AllSpellsController.getSpells()
    const { nome, classe, action, concentration, ritual, level, school, source} = req.query as Query;

    res.json(AllSpellsController.#SpellList(AllSpellsController.#querySpells(spells.spell, {nome, classe, action, concentration, ritual, level, school, source})))   
  }

  UniqueSpell(req:Request<Query>, res:Response){
    const spells = AllSpellsController.getSpells()
    const {nome} = req.query as Query;
    
    res.json(AllSpellsController.#QuerySpellUnique(spells.spell, nome))
  }

  //Private Functions
    //Função para retornar apenas os dados necessários
  static #SpellList(spellList:Spell[]){
    if(spellList){
        return spellList.map((spell) => {
            return {
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
  }

  // Função para filtrar os dados
  static #querySpells(spellList: Spell[], {nome, classe, action, concentration, ritual, level, school, source}: Query){
    
    //Convertendo os valores de concentration e ritual para boolean
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
        (spell:Spell) => nome === undefined || spell.name.toLowerCase().includes(nome.toLowerCase()),
        (spell:Spell) => classe === undefined || spell.classes.includes(classe),
        (spell:Spell) => action === undefined || spell.casting_time.includes(action),
        (spell:Spell) => concentration === undefined || spell.duration.concentration === Boolean(concentration),
        (spell:Spell) => ritual === undefined || spell.ritual === Boolean(ritual),
        (spell:Spell) => level === undefined || spell.level === Number(level),
        (spell:Spell) => school === undefined || spell.school === school,
        (spell:Spell) => source === undefined || spell.source === source
    ];
    return spellList.filter(spell => filters.reduce((acc, filter) => acc && filter(spell), true));
  }

  static #QuerySpellUnique(spellList:Spell[], nome:string){
    if(spellList.filter((spell) => {
        spell.name === nome
    })){
        return spellList.filter(spell => spell.name === nome);
  }
}
}
export { AllSpellsController }