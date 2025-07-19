```javascript
// Chatbot Logic
function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  const button = document.getElementById("chatbot-button");
  chatbot.classList.toggle("hidden");
  button.classList.toggle("hidden");
}

function handleChatSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (!message) return;

  const messages = document.getElementById("chat-messages");
  const userMessage = document.createElement("div");
  userMessage.className = "flex justify-end";
  userMessage.innerHTML = `
    <div class="max-w-[80%] p-3 rounded-2xl bg-blue-600 text-white">
      <p class="text-sm whitespace-pre-line">${message}</p>
      <p class="text-xs opacity-70 mt-1">${new Date().toLocaleTimeString()}</p>
    </div>
  `;
  messages.appendChild(userMessage);

  // Simulate AI response (replace with actual API call in production)
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "flex justify-start";
    botMessage.innerHTML = `
      <div class="max-w-[80%] p-3 rounded-2xl bg-gray-100 text-gray-800">
        <p class="text-sm whitespace-pre-line">Thank you for your query! I'm processing it now. How else can I assist you?</p>
        <p class="text-xs opacity-70 mt-1">${new Date().toLocaleTimeString()}</p>
      </div>
    `;
    messages.appendChild(botMessage);
    messages.scrollTop = messages.scrollHeight;
  }, 1000);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

function toggleVoiceRecognition() {
  const micButton = document.getElementById("mic-button");
  micButton.classList.toggle("bg-red-100");
  micButton.classList.toggle("text-red-600");
  // Placeholder for Web Speech API integration
  console.log("Voice recognition toggled");
}

// Initialize chatbot
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("chatbot-button").addEventListener("click", toggleChatbot);
});
```