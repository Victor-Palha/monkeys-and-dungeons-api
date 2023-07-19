import { Request, Response } from "express";

import fs from "fs"

export class CreateId{

    async execute(req:Request, res:Response){
        const feats = JSON.parse(fs.readFileSync(__dirname + "/../../models/conditions/conditions.json").toString())
        const newFeats = feats.map((feat)=>{
            const newId = crypto.randomUUID()
            feat.id = newId
            return feat
        })
        fs.writeFileSync(__dirname + "/../../models/conditions/conditions.json", JSON.stringify(newFeats))

        return res.json(newFeats)
    }
}