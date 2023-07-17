import { BackgroundRepository } from "../../repositories/BackgroundRepository";

export class GetAllBackgroundsService {
    constructor(private backgroundRepository: BackgroundRepository){}
    async execute(){
        const backgrounds = await this.backgroundRepository.getAllBackgrounds()
        
        return backgrounds
    }
}