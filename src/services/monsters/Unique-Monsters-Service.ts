import { MonstersRepository } from "../../repositories/MonstersRepository";

export class UniqueMonstersService{
    constructor(private monsterRepository: MonstersRepository){}
    async execute(id: string){
        return await this.monsterRepository.UniqueMonster(id)
    }
}