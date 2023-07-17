export interface CharacterBackground {
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