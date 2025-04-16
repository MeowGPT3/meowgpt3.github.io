// Manual Q&A setup — no API calls needed
async function sendMessage(userMessage) {
    const cleanedInput = userMessage.toLowerCase().replace(/[^a-z0-9 ]/gi, "").trim();

    // Static manual responses
    const manualResponses = {
        "hello": "Hey there! 👋 How can I help you today?",
        "how are you": "I'm doing great, thanks for asking! 😊",
        "what's your name": "I'm your chatbot assistant!",
        "bye": "Goodbye! Take care! 👋",
        "help": "You can ask me anything like 'tell me a joke', 'what's the weather?', or just chat with me!",
        "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field! 😄",
        "what is ai": "AI stands for Artificial Intelligence. It's the simulation of human intelligence by machines.",
        "default": "I'm not sure how to answer that yet. Try asking something else!"
    };

    // Return a match or fallback to default
    return manualResponses[cleanedInput] || manualResponses["default"];
}
