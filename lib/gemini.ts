const GEMINI_API_KEY = 'AIzaSyAZJuTXqkJLVkxWQ-gNQcz7KYdVYQ6GvGM';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export async function generateResponse(prompt: string) {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key is not configured');
  }

  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }]
    })
  });

  if (!response.ok) {
    throw new Error('Failed to generate response');
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}