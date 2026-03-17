function chatBots(){
const btn = document.getElementById("chatbot-btn");
const box = document.getElementById("chatbot-box");
const input = document.getElementById("chatbot-input");
const send = document.getElementById("chatbot-send");
const messages = document.getElementById("chatbot-messages");

// Toggle chatbot
btn.addEventListener("click", () => {
    box.classList.toggle("hidden");
});

// Send message
send.addEventListener("click", handleMessage);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleMessage();
});

function handleMessage() {
    const userText = input.value.trim();
    if (!userText) return;

    addMessage("You", userText);
    input.value = "";

    const botReply = getBotResponse(userText.toLowerCase());
    setTimeout(() => addMessage("Bot", botReply), 500);
}

// Add message to UI
function addMessage(sender, text) {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

// Bot logic
function getBotResponse(msg) {

    if (msg.includes("hello") || msg.includes("hi")) {
        return "Hi! 👋 I'm Jeevan's bot. Ask me about projects or skills.";
    }

    if (msg.includes("project")) {
        return "I have built MERN apps,Gola,Developer stats, portfolio websites, and more!";
    }
    if(msg.includes("javascript")){
        return "javascript is a high level scripting language which is use to make page functional and dynamic"
    }
    if (msg.includes("React")) {
        return "It is a frontend framework";
    }

    if (msg.includes("skills")) {
        return "JavaScript, React,  MongoDB, Tailwind CSS.";
    }

    if (msg.includes("contact")) {
        return "You can use the contact form or email me!";
    }

    return "Sorry, I didn't understand that. Try asking about projects or skills!";
}
};