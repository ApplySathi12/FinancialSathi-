function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function applyNow(url) {
  window.open(url, '_blank');
}

function showRecommendModal() {
  document.getElementById('recommend-modal').classList.remove('hidden');
}

function closeRecommendModal() {
  document.getElementById('recommend-modal').classList.add('hidden');
}

function getAIRecommendation() {
  const userNeeds = document.getElementById('user-needs').value;
  const resultDiv = document.getElementById('recommendation-result');
  const resultText = document.getElementById('recommendation-text');
  resultText.textContent = `Based on your input: "${userNeeds}", we recommend exploring our credit card options tailored to your needs.`;
  resultDiv.classList.remove('hidden');
}

function filterCards(category) {
  console.log(`Filtering cards by: ${category}`);
  // Placeholder for card filtering logic
}

function updateEMI(suffix = '') {
  const loanAmount = parseFloat(document.getElementById(`loan-amount${suffix ? '-' + suffix : ''}`).value);
  const interestRate = parseFloat(document.getElementById(`interest-rate${suffix ? '-' + suffix : ''}`).value);
  const tenure = parseFloat(document.getElementById(`tenure${suffix ? '-' + suffix : ''}`).value);

  document.getElementById(`loan-amount-display${suffix ? '-' + suffix : ''}`).textContent = `₹${loanAmount.toLocaleString("en-IN")}`;
  document.getElementById(`interest-rate-display${suffix ? '-' + suffix : ''}`).textContent = `${interestRate}%`;
  document.getElementById(`tenure-display${suffix ? '-' + suffix : ''}`).textContent = `${tenure} months`;

  const monthlyRate = interestRate / 12 / 100;
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - loanAmount;

  document.getElementById(`emi-result${suffix ? '-' + suffix : ''}`).textContent = `₹${Math.round(emi).toLocaleString("en-IN")}`;
  document.getElementById(`principal-display${suffix ? '-' + suffix : ''}`).textContent = `₹${loanAmount.toLocaleString("en-IN")}`;
  document.getElementById(`interest-display${suffix ? '-' + suffix : ''}`).textContent = `₹${Math.round(totalInterest).toLocaleString("en-IN")}`;
  document.getElementById(`total-amount-display${suffix ? '-' + suffix : ''}`).textContent = `₹${Math.round(totalAmount).toLocaleString("en-IN")}`;
}

function setPreset(amount, rate, tenure, suffix = '') {
  document.getElementById(`loan-amount${suffix ? '-' + suffix : ''}`).value = amount;
  document.getElementById(`interest-rate${suffix ? '-' + suffix : ''}`).value = rate;
  document.getElementById(`tenure${suffix ? '-' + suffix : ''}`).value = tenure;
  updateEMI(suffix);
}

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
  console.log("Voice recognition toggled");
}

function handleContactSubmit(event) {
  event.preventDefault();
  alert("Message submitted! We'll get back to you soon.");
  document.querySelector('form').reset();
}

document.addEventListener("DOMContentLoaded", () => {
  updateEMI();
  updateEMI('page');
  document.getElementById("chatbot-button").addEventListener("click", toggleChatbot);
  document.getElementById("user-needs").addEventListener("input", () => {
    const charCount = document.getElementById("user-needs").value.length;
    document.getElementById("char-count").textContent = `${charCount}/500 characters`;
  });
});