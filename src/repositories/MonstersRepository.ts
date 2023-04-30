import { Monsters } from "../interfaces/Monsters";
import { Query } from "../interfaces/Query";

export interface MonstersRepository {
    AllMonsters(): Promise<Monsters[]>
    QueryMonsters(query: Query): Promise<Monsters[]>
    UniqueMonster(id: string): Promise<any>
}