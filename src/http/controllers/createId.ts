import { Request, Response } from "express";
import { Feats } from "../../interfaces/feats";
import { CharacterBackground } from "../../interfaces/background";
import fs from "fs"

export class CreateId{

    async execute(req:Request, res:Response){
        const feats = JSON.parse(fs.readFileSync(__dirname + "/../../models/backgrounds/backgrounds.json").toString())
        const newFeats = feats.map((feat)=>{
            const newId = crypto.randomUUID()
            feat.id = newId
            return feat
        })
        fs.writeFileSync(__dirname + "/../../models/backgrounds/backgrounds.json", JSON.stringify(newFeats))

        return res.json(newFeats)
    }
}