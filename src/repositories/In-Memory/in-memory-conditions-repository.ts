import { Conditions } from "../../interfaces/conditions";
import { ConditionsRepository } from "../ConditionsRepository";
import fs from 'fs'

export class InMemoryConditionsRepository implements ConditionsRepository{
    private conditions: Conditions[] = []
    constructor(){
        this.conditions = JSON.parse(fs.readFileSync(__dirname + "/../../models/conditions/conditions.json").toString())
    }

    async getAllConditions(){
        return this.conditions.map((condition) =>{
            return {
                id: condition.id,
                name: condition.name,
                source: condition.source
            }
        })
    }

    async uniqueCondition(id: string){
        const condition = this.conditions.filter(condition => condition.id === id)
        return condition[0]
    }
}