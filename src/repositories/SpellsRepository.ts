import { Query } from "../interfaces/Query";
import { Spells, SpellsReturn } from "../interfaces/Spells";

export interface SpellsRepository {
    AllSpells(): Promise<SpellsReturn[]>
    QuerySpells(query: Query): Promise<SpellsReturn[]>
    UniqueSpell(id: string): Promise<Spells[]>
}