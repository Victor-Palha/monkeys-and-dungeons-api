import { FeatsRepository } from "../../repositories/FeatsRepository";

export class UniqueFeatService{
    constructor(private featRepository: FeatsRepository){}
    async execute(id: string){
        const feat = await this.featRepository.getOneFeat(id)
        
        return feat
    }
}