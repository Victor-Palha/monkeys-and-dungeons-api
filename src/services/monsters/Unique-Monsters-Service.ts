import { MonstersRepository } from "../../repositories/MonstersRepository";

export class UniqueMonstersService{
    constructor(private monsterRepository: MonstersRepository){}
    async execute(id: string){
        const monster = await this.monsterRepository.UniqueMonster(id)
        return monster
    }
}