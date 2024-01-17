// Import Chatbot and Google Services modules
const chatbot = require('chatbot'); 
const googleServices = require('googleServices');

// Process message
function processMessage(message) {

  // Call chatbot to generate response
  let response = chatbot.generateResponse(message);

  // Check if the message is requesting Google services
  if (chatbot.isGoogleServiceRequest(message)) {

    // Call Google services module 
    response = googleServices.handleGoogleRequest(message);

  }

  return response;

}

// Send response 
function sendResponse(space, response) {
  
  // Use Google Chat API
  chatApi.messages.create({
    space: space,
    text: response    
  });

}

// Initialize APIs
const gemini = new GeminiAPI({
  key: GEMINI_KEY 
});

const googleApi = new GoogleApi({
  key: GOOGLE_KEY
});

// Pass APIs to modules
chatbot.init(gemini);
googleServices.init(googleApi);
