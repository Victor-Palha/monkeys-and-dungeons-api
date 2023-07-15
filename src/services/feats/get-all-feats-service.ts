import { FeatsRepository } from "../../repositories/FeatsRepository";

export class GetAllFeatsService{
    constructor(private featsRepository: FeatsRepository){}

    async execute(){
        const feats = await this.featsRepository.getAllFeats()
        
        return feats
    }
}