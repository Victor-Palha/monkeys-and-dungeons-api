import { BackgroundRepository } from "../../repositories/BackgroundRepository";

export class UniqueBackgroundService{
    constructor(private backgroundRepository: BackgroundRepository){}
    async execute(id: string){
        const background = await this.backgroundRepository.uniqueBackground(id)

        return background
    }
}