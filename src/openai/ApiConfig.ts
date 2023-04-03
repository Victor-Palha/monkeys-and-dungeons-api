import axios from 'axios';

const openaiConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
  },
  baseURL: 'https://api.openai.com/v1',
};

export async function generateDnDAdventure({settings, plots, villains, monsters}) {

    const prompt = `
        Generate a D&D 5e adventure itinerary complete with this information:
      - Scenario: ${settings[1]}
      - Plot Twist: ${plots[1]}
      - Main Villain: ${villains[1]}
      - Monsters: ${monsters[1]}
      ###
        with a beginning, middle, end, title for the adventure and level of the adventure.
        all tranlated to html and MUST have at least 30 paragraphs and the names of the monsters and villains must be in bold.
    `;
    //console.log(prompt)
  
    const requestBody = {
      prompt,
      temperature: 0.5,
      max_tokens: 1024,
      n: 1,
      stop: '###',
    };
  
    const response = await axios.post('/engines/text-davinci-003/completions', requestBody, openaiConfig);
  
    return response.data.choices[0].text.trim();
}