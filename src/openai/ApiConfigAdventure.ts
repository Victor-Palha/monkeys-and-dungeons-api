import { openai } from './OpenAiConfig';

interface IGenerateDnDAdventure {
  settings: string[],
  plots: string[],
  villains: string[],
  monsters: string[]
}
export async function generateDnDAdventure({settings, plots, villains, monsters}: IGenerateDnDAdventure) {

  const promptToAI = `
  Generate a D&D 5e adventure itinerary complete with this information:
  - Scenario: ${settings[1]}
  - Plot Twist: ${plots[1]}
  - Main Villain: ${villains[1]}
  - Monsters: ${monsters[1]}
  ###
      with a beginning, middle, end, title for the adventure and level of the adventure.
      all tranlated to html and MUST have at least 30 paragraphs and the names of the monsters and villains must be in bold.
  `;
  
    const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "assistant",
        "content": "You are a dungeon master for D&D 5e."
      },
      {
        "role": "user",
        "content": promptToAI
      }
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

    // for(let i = 0; i < 4; i++){
    //   console.log(completion.data.choices[i].text)
    // }
    return completion.data.choices[0].message
}