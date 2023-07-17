import { CharacterBackground } from "../interfaces/background";

export interface BackgroundRepository {
    getAllBackgrounds(): Promise<CharacterBackground[]>;
}