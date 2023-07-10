import { Request, Response } from "express";
import { CharacterStyle } from "../../../interfaces/character";
import { generateDnDCharacter } from "../../../openai/ApiConfigImg";

class GenerateDnDCharacterController{
    async execute(req: Request, res: Response){

        const {race, classCharacter, sex, age, height, weight, eyes, skin, hair, others} = req.body as CharacterStyle
        // console.log(race, classCharacter, sex, age, height, weight, eyes, skin, hair, others)
        try {
            const response = await generateDnDCharacter({race, classCharacter, sex, age, height, weight, eyes, skin, hair, others})
            return res.json(response)
        } catch (error) {
            if (error.response) {
                console.log("Avatar error status: ", error.response.status);
                console.log("Avatar error data: ", error.response.data);
              } else {
                console.log("Avatar error message: ", error.message);
              }
            return res.status(500).json(error)
        }
    }
}

export { GenerateDnDCharacterController }