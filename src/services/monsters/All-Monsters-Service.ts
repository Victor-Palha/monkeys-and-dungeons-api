import { MonstersRepository } from "../../repositories/MonstersRepository";

export class AllMonstersService{
    constructor(private monsterRepository: MonstersRepository){}
    async execute(page: number){
        return await this.monsterRepository.AllMonsters(page)
    }
}