import { Spells, SpellsReturn } from "../interfaces/Spells";

export interface SpellsRepository {
    AllSpells(): Promise<SpellsReturn[]>
    QuerySpells(search: string): Promise<SpellsReturn[]>
    UniqueSpell(id: string): Promise<Spells[]>
}