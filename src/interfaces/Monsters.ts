// export interface Monsters{
//     id: string
//     name: string;
//     source: string;
//     type: string;
//     cr: string;
//     image: boolean;
//     ext: string;
// }
export interface MonsterTamplate{
    id: string
    name: string;
    meta: string;
    Challenge: string;
    img_url: string;
}

export interface Monsters{
    id: string
    name: string;
    meta: string;
    Armor_Class: string;
    Hit_Points: string;
    Speed: string;
    STR: string;
    DEX: string;
    CON: string;
    INT: string;
    WIS: string;
    CHA: string;
    STR_mod: string;
    DEX_mod: string;
    CON_mod: string;
    INT_mod: string;
    WIS_mod: string;
    CHA_mod: string;
    Senses: string;
    Languages: string;
    Challenge: string;
    Traits: string;
    Actions: string;
    img_url: string;
    Damage_Resistances?: string;
    Condition_Immunities?: string;
    Damage_Immunities?: string;
    Saving_Throws?: string;
    Skills?: string;
    Legendary_Actions?: string;
}