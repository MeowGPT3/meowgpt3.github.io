const API_URL = "https://2d8b65e8-0d7d-409f-97e4-0d0a347694f5-00-1nyvj27ujppd4.sisko.replit.dev/"; // Replace with your Replit API

async function sendMessage(userMessage) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input_text: userMessage })
    });

    const data = await response.json();
    return data.response;
}
