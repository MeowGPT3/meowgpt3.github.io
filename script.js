function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (!input) return;

    chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
    document.getElementById("userInput").value = "";

    // Simulated bot response
    setTimeout(() => {
        let responses = ["Hello!", "How can I help?", "Nice to meet you!", "Tell me more!"];
        let botResponse = responses[Math.floor(Math.random() * responses.length)];
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
}
