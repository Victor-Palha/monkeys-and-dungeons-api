export interface MonstersInterface{
    monster: Monster[];
}

interface Monster{
    name: string;
    group?: string[];
    source: string;
    page: number;
    srd?: boolean;
    othersSource?: string[];
    size: string[] | string;
    type: Types[] | string;
    alignment: string[];
    ac: number[] | Ac[];
    hp: Hp;
    speed: Speed;
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    save?: Save;
    skill: Skills;
    senses?: string[];
    passive: number;
    immune?: string[];
    languages?: String[];
    cr: string | number | number[];
    spellcasting?: Spellcasting[];
    trait?: Trait[];
    action: Trait[];
    legendary?: Trait[];
    legendaryGroup?: LegendaryGroup | LegendaryGroup[];
    variant?: Variant[];
    environment: string[];
    dragonCastingColor?: string;
    dragonAge?: string;
    soundClip?: SoundClip;
    traitTags?: string[];
    senseTags?: string[];
    actionTags?: string[];
    languageTags?: string[];
    damageTags: string[];
    damageTagsLegendary?: string[];
    miscTags: string[];
    conditionInflict?: string[];
    conditionInflictLegendary?: string[];
    hasToken: boolean;
    hasFluff: boolean;
    hasFluffImages: boolean;
}
interface Types{
    type: string;
    tags: string[];
    swarmsize?: string;
}
interface Hp{
    average: number;
    formula: string;
}
interface Speed{
    walk?: number;
    fly?: number;
    swim?: number;
    burrow?: number;
    climb?: number;
    hover?: boolean;
}
interface Skills{
    acrobatics?: string;
    arcana?: string;
    athletics?: string;
    deception?: string;
    history?: string;
    insight?: string;
    intimidation?: string;
    investigation?: string;
    medicine?: string;
    nature?: string;
    perception?: string;
    performance?: string;
    persuasion?: string;
    religion?: string;
    sleightOfHand?: string;
    stealth?: string;
    survival?: string;
}
interface Trait{
    name: string;
    entries: string[];
}
interface SoundClip{
    type: string;
    path: string;
}
interface Ac{
    ac: number;
    from: string[];
}
interface Save{
    str?: string;
    dex?: string;
    con?: string;
    int?: string;
    wis?: string;
    cha?: string;
}
interface LegendaryGroup{
    name: string;
    source: string;
}
interface Spellcasting{
    name: string;
    headerEntries: string[];
    spells: Spell;
    ability: string;
}
interface Spell{
    0: Spells;
    1: Spells;
    2: Spells;
    3: Spells;
    4: Spells;
    5: Spells;
    6: Spells;
    7: Spells;
    8: Spells;
    9: Spells;
}
interface Spells{
    spells: String[]
    slots?: number;
}
interface Variant{
    type: string;
    name: string;
    source: string;
    page: number;
    entries: string[] | Entries[];
}
interface Entries{
    type: string;
    name: string;
    entries: string[];
}