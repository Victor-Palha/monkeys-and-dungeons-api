import { CharacterStyle } from '../interfaces/character';
import { openai } from './OpenAiConfig';

export async function generateDnDCharacter({race, classCharacter, sex, age, height, weight, eyes, skin, hair, others}: CharacterStyle) {

    const promptToImg = `Generate a image to represent a DnD Character with the following characteristics: Race: ${race}, Class: ${classCharacter}, male or female= ${sex}, Age: ${age}, Height: ${height}, Weight: ${weight} Eyes: ${eyes}, Skin: ${skin}, Hair: ${hair}, Others: ${others}
      ###
      The image MUST to be generated as a DnD 5e art style, the image needs to show the character's entire body on a medieval background`
    const reponse = await openai.createImage({
      prompt: promptToImg,
      size: "512x512"
    })

    return reponse.data.data[0].url
}