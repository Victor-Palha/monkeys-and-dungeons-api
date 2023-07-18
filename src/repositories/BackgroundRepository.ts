import { BackgroundTemplate, CharacterBackground } from "../interfaces/background";

export interface BackgroundRepository {
    getAllBackgrounds(): Promise<BackgroundTemplate[]>;
    uniqueBackground(id: string): Promise<CharacterBackground>;
}