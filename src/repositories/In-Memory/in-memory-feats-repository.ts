import { Feats } from "../../interfaces/feats";
import { FeatsRepository } from "../FeatsRepository";
import fs from "fs"

export class InMemoryFeatsRepository implements FeatsRepository {
    private feats: Feats[]
    constructor(){
        this.feats = JSON.parse(fs.readFileSync(__dirname + "/../../models/feats/feats.json").toString())
    }

    async getOneFeat(id: string): Promise<Feats> {
        const feat = this.feats.find((feat)=>{
            return feat.id === id
        })

        return feat
    }
    
    async getAllFeats(){
        const feats = this.feats.map((feat)=>{
            return {
                name: feat.name,
                id: feat.id
            }
        })

        return feats
    }

}