export interface CharacterBackground {
    id: string;
    Classe: string;
    Source: string;
    Page: string;
    SkillProficiencies: string;
    ToolProficiencies?: string;
    Languages?: string;
    Equipment: string[];
    Feature: string;
    FeatureDescription: string;
    SuggestedCharacteristics: {
      PersonalityTraits: string[];
      Ideals: string[];
      Bonds: string[];
      Flaws: string[];
    };

}

export interface BackgroundTemplate{
    name: string;
    id: string;
    SkillProficiencies: string;
    Source: string;
}