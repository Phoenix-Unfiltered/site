function initFrikkieChat() {
  const chatWidget = document.createElement("div");
  chatWidget.className = "frikkie-chat-widget";
  chatWidget.innerHTML = `
    <div class="frikkie-button" onclick="document.querySelector('.frikkie-box').classList.toggle('show')">💬 Chat with Frikkie</div>
    <div class="frikkie-box">
      <div class="frikkie-header">Frikkie</div>
      <div class="frikkie-messages" id="frikkie-messages"></div>
      <input type="text" id="frikkie-input" placeholder="Type your chaos here..." />
    </div>
  `;
  document.body.appendChild(chatWidget);

  const messagesDiv = document.getElementById("frikkie-messages");
  const input = document.getElementById("frikkie-input");

  async function sendMessage(msg) {
    messagesDiv.innerHTML += `<div class="msg user">${msg}</div>`;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    try {
      const response = await fetch("https://frikkie-backend-1.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: msg })
      });

      const data = await response.json();
      const reply = data.reply || "Frikkie’s having a moody moment, try again later.";

      messagesDiv.innerHTML += `<div class="msg frikkie">${reply}</div>`;
      messagesDiv.scrollTop = messagesDiv.scrollHeight;

    } catch (err) {
      messagesDiv.innerHTML += `<div class="msg frikkie">Frikkie crashed into a wall: ${err.message}</div>`;
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const msg = input.value.trim();
      if (msg) {
        sendMessage(msg);
        input.value = "";
      }
    }
  });
}
