import { ConditionsRepository } from "../../repositories/ConditionsRepository";

export class UniqueConditionService{
    constructor(private conditionRepository: ConditionsRepository){}

    async execute(id: string){
        const condition = await this.conditionRepository.uniqueCondition(id)

        return condition
    }
}