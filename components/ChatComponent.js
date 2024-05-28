import { MessageComponent } from "./MessageComponent.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { navigateTo } from "../router.js";

export function ChatComponent(character) {
  const chatElement = document.createElement("div");
  chatElement.classList.add("chat");

  chatElement.innerHTML = `
      <div class="btnChat">
        <button onclick="history.back()" class="btn-return">Regresar</button>
        <button onclick="goToApiKey()" class="btn-returnApikey">Introduce la llave mágica</button>
      </div>
        <div class="chat-container">
            <div class="chat-character">
                <img class="character-picture" src="${character.imageUrl}" alt=""/>
                <h1 class="character-name">${character.name}</h1>
            </div>
            <ul id="message-list" class="chat-message-list">
            </ul>
            <div class="chat-input">
                <form id="message-form" class="chat-message-form">
                    <textarea id="message-input" placeholder="Escribe aquí tu mensaje" name="userInput"></textarea>
                    <div class="btn-send-container">
                        <button id="sendMessage" class="btn-send" type="submit">
                            <img src="./img/btn-send.svg" fill="currentColor"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

  window.goToApiKey = function () {
    navigateTo("/api-key");
  };

  const form = chatElement.querySelector("#message-form");
  const textarea = chatElement.querySelector("#message-input");

  textarea.addEventListener("keydown", function (event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault(); // Evitar salto de línea en el textarea
      form.dispatchEvent(new Event("submit"));
    }
  });

  function onSubmit(formulario) {
    formulario.preventDefault();

    const userInput = formulario.target.userInput.value;
    const characterName = character.name;
    const characterDescription = character.description;

    const list = chatElement.querySelector("#message-list");

    const messageElement = MessageComponent(userInput, "sent");
    messageElement.innerHTML = userInput;

    list.appendChild(messageElement);

    formulario.target.reset();

    communicateWithOpenAI(characterName, characterDescription, userInput)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(
            "Lo lamento, necesitas ingresar la llave para poder hablar conmigo"
          );
        }
        const responseMessage = res.choices[0].message.content;

        const responseMessageElement = MessageComponent(
          responseMessage,
          "received"
        );

        list.appendChild(responseMessageElement);
      })
      .catch((err) => {
        const errorMessage = err.message;

        const errorMessageElement = MessageComponent(errorMessage, "received");
        list.appendChild(errorMessageElement);
      });

    return false;
  }

  form.addEventListener("submit", onSubmit);

  return chatElement;
}
