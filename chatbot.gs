// Load Gemini API client
const gemini = require('gemini-api-client');

async function generateResponse(message, sender) {

  // Build prompt with sender context
  const prompt = `${sender} said: ${message}`; 
  
  try {
    // Call Gemini API to generate response
    const response = await gemini.generate(prompt);
    
    // Format response nicely
    return `Here is my response: ${response}`;
    
  } catch (error) {
    console.error('Error calling Gemini API', error);
    return 'Sorry, I had trouble generating a response';  
  }

}

async function onMessageReceived(event) {

  // Extract message details  
  const message = event.message.text;
  const sender = event.user.displayName;
  
  // Generate response
  const response = await generateResponse(message, sender);

  // Send response back to user
  sendResponse(response, event.space.name, event.message.thread.name);

}

function sendResponse(response, space, thread) {

  // Send response back to user
  // Using Google Chat API
  chat.messages.create({
    space: space,
    thread: thread, 
    text: response
  });

}

}
