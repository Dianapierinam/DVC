import { MessageComponent } from "./MessageComponent.js";
import { communicateWithOpenAI } from "../lib/OpenAIApi.js";

export function groupchat(characters) {
  const groupElement = document.createElement('div');
  groupElement.classList.add("groupchat");

  groupElement.innerHTML = `
    <button onclick="history.back()" class="btn-return">Regresar</button>
    <div class="background-chat">
      <div id="group-image-chat">
        <img id="group-image" src="https://puzzlemania-154aa.kxcdn.com/products/2021/puzzle-clementoni-500-pieces-harry-potter-500.jpg" alt="Imagen del grupo">
        <h2 class="group-name">Hogwarts</h2>
      </div>
      <ul id="message-list-group" class="chat-message-list-group"></ul>
      <div id="chat-input-group" class="chat-input-group">
        <form id="message-form-group" class="chat-message-form-group">
          <textarea id="message-input-group" placeholder="Escribe aquí tu mensaje"></textarea>
          <div class="btn-send-container-group">
            <button type="submit" id="sendMessage-group" class="btn-send-group">
              <img id="send-group" src="./img/btn-send.svg" fill="currentColor"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  const list = groupElement.querySelector("#message-list-group");
  const form = groupElement.querySelector("#message-form-group");
  const messageInput = groupElement.querySelector("#message-input-group");

  // Evento para dar enter en el input y enviar mensaje
  messageInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault(); // Evitar salto de línea en el textarea
      form.dispatchEvent(new Event("submit"));
    }
  });


  // Maneja el envío de mensajes
  form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
      const newMessage = MessageComponent(messageText, "sent");
      list.appendChild(newMessage);
      messageInput.value = "";

      

      // Obtener respuestas automáticas de todos los personajes
      for (const character of characters) {
        try {
          await communicateWithOpenAI(character.name, character.description, messageText)
            .then(res => res.json())
            .then(res => {
              const responseMessage = res.choices[0].message.content;
          
              const characterMessage = MessageComponent(responseMessage, "received", character);
              list.appendChild(characterMessage);

            })

        } catch (error) {
        //   console.error("Error en la comunicación con OpenAI:", error);
        }
      }
    }
  });

  return groupElement;
}



















