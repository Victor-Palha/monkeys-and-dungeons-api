import { MonstersRepository } from "../../repositories/MonstersRepository";

export class AllMonstersService{
    constructor(private monsterRepository: MonstersRepository){}
    async execute(){
        return await this.monsterRepository.AllMonsters()
    }
}