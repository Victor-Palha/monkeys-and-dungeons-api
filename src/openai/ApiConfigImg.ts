import { CharacterStyle } from '../interfaces/character';
import { openai } from './OpenAiConfig';

export async function generateDnDCharacter({race, classCharacter, sex, age, height, weight, eyes, skin, hair, others}: CharacterStyle) {

    const promptToImg = `Generate a image to represent a DnD Character with the following characteristics: Race: ${race}, Class: ${classCharacter}, male or female= ${sex}, Age: ${age}, Height: ${height}, Weight: ${weight} Eyes: ${eyes}, Skin: ${skin}, Hair: ${hair}, Others: ${others}
    ###
    The image MUST to be generated as a DnD 5e art style.`
    const reponse = await openai.createImage({
      prompt: promptToImg,
      size: "1024x1024"
    })

    return reponse.data.data[0].url
}