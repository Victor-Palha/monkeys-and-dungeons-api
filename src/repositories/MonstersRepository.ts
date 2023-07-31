import { MonsterTamplate, Monsters } from "../interfaces/Monsters";

export interface MonstersRepository {
    AllMonsters(page: number): Promise<MonsterTamplate[]>
    QueryMonsters(search: string): Promise<MonsterTamplate[]>
    UniqueMonster(id: string): Promise<Monsters>
}