async function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (!input) return;

    chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
    document.getElementById("userInput").value = "";

    // OpenAI API Call
    let response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: input }]
        })
    });

    let data = await response.json();
    let botReply = data.choices[0].message.content;

    chatbox.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;
}
