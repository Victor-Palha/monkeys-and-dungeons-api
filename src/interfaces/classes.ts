export interface ClasseInterface {
    id: string,
    name: string,
    class_features: {
        hit_points: {
            hit_dice: string,
            hp_at_1st_level: string,
            hp_at_higher_levels: string
        },
        proficiencies: {
            armor: string,
            weapons: string,
            tools: string,
            saving_throws: string,
            skills: string
        }
        equipment: string[]
    },
    features: Features[]
}

interface Features {
    index: string,
    name: string,
    content: string
}