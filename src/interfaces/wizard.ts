export interface Wizard {
    id: string
    name: string
    description: string
    classFeatures: {
        hitDice: string
        hpAt1stLevel: number
        hpAtHigherLevels: number
    }
    proficiencies: {
        armor: string[]
        weapons: string[]
        tools: string[]
    }
    skills: {
        number: number
        list: string[]
    }
    equipment: {
        choiceA: string[]
        choiceB: string[]
        choiceC: string[]
    }
    traits: Traits[]
    subClasse: number
    abilityScore: number[]
    spellList: SpellList[]
}
type Traits = {
    level: number
    name: string
    description: string
}
type SpellList = {
    level: number
    cantrips: number
    spellsKnown: number
    spellSlots: {
        lvl1: number
        lvl2: number
        lvl3: number
        lvl4: number
        lvl5: number
        lvl6: number
        lvl7: number
        lvl8: number
        lvl9: number
    }
}