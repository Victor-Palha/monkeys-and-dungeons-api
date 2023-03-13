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
        Generate a D&D 5e adventure complete with this information with a beginning, middle and end:
      - Scenario: ${settings[1]}
      - Plot Twist: ${plots[1]}
      - Main Villain: ${villains[1]}
      - Monsters: ${monsters[1]}
      
      Generate the sheet of the monsters that will be found.
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