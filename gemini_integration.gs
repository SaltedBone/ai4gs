// Load Gemini API client
const gemini = require('gemini-api-client');

// Gemini API key 
const API_KEY = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');

// Initialize client
const client = new gemini.Client(API_KEY);

// Send prompt to Gemini  
async function sendPromptToGemini(prompt) {

  const request = {
    prompt: prompt,
    max_tokens: 100,
    temperature: 0.9
  }
  
  return await client.generate(request); 

}

// Process response
function processGeminiResponse(response) {

  // Extract generated text
  const aiText = response.text; 
  
  // Clean up text
  const cleanedText = cleanText(aiText);

  return cleanedText;

}

// Helper to clean up text
function cleanText(text) {
  // Remove multiple newlines, etc
  return text; 
}
