import { AllFeats, Feats } from "../interfaces/feats";

export interface FeatsRepository {
    getAllFeats(): Promise<AllFeats[]>
    getOneFeat(id: string): Promise<Feats>
}