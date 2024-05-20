import { MessageComponent } from "./MessageComponent.js";

export function ChatComponent(character) {
    const chatElement = document.createElement('div');
    chatElement.classList.add("chat");

    chatElement.innerHTML = `
        <button onclick="history.back()" class="btn-return">Regresar</button>
        <div class="chat-container">
            <div class="chat-character">
            <div class="chat-character">
            <img class="character-picture" src="${character.imageUrl}" alt=""/>
            <h1 class="character-name">${character.name}</h1>
        </div>
            </div>
            <ul id="message-list" class="chat-message-list">
            </ul>
            <div class="chat-input">
                <form id="message-form" class="chat-message-form">
                    <textarea id="message-input" placeholder="Escribe aquí tu mensaje"></textarea>
                    <div class="btn-send-container">
                        <button id="sendMessage" class="btn-send">
                            <img src="img/btn-send.svg" fill="currentColor"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    const list = chatElement.querySelector("#message-list");
    const message1 = MessageComponent("Hola Muggle", "received");
    const message2 = MessageComponent("Como te ha ido", "sent");
    const message3 = MessageComponent("Muy bien gracias, mi gato se perdio", "received");

    list.appendChild(message1);
    list.appendChild(message2);
    list.appendChild(message3);

    return chatElement;
}