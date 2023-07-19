import { ConditionsRepository } from "../../repositories/ConditionsRepository";

export class GetAllConditionsService{
    constructor(private conditionsRepository: ConditionsRepository){}

    async execute(){
        const conditions = await this.conditionsRepository.getAllConditions()

        return conditions
    }
}