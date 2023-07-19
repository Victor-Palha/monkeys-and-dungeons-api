import { MonsterTamplate, Monsters } from "../interfaces/Monsters";
import { Query } from "../interfaces/Query";

export interface MonstersRepository {
    AllMonsters(page: number): Promise<MonsterTamplate[]>
    QueryMonsters(search: string): Promise<MonsterTamplate[]>
    UniqueMonster(id: string): Promise<Monsters>
}