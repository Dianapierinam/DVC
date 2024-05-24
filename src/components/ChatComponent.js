import { MessageComponent } from "./MessageComponent.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js"

export function ChatComponent(character) {
  const chatElement = document.createElement('div');
  chatElement.classList.add("chat");

  chatElement.innerHTML = `
        <button onclick="history.back()" class="btn-return">Regresar</button>
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

  // const list = chatElement.querySelector("#message-list");
  const form = chatElement.querySelector('#message-form');
  const textarea = chatElement.querySelector('#message-input');
  textarea.addEventListener("keydown", function(event) {
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
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw new Error (
            "Lo lamento, necesitas ingresar la llave para poder hablar contigo"
          );
           
        }
        const responseMessage = res.choices[0].message.content;

        const responseMessageElement = MessageComponent(responseMessage, "received");

        list.appendChild(responseMessageElement);
      })
      .catch((error) => {error
        // const errorAnswer = "Lo lamento, en este momento no puedo responder."
        // console.error("Error durante la solicitud de datos del usuario:", error);
      })
            
    
    return false;
  }

  form.addEventListener("submit", onSubmit)

  return chatElement;
}

   

   
