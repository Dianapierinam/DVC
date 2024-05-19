export function ChatComponent() {
    const chatElement = document.createElement('div');
    chatElement.classList.add("chat");

    chatElement.innerHTML = `
        <button onclick="history.back()" class="btn-return">Regresar</button>
        <div class="chat-container">
            <div class="chat-character">
                <div class="chat-character">
                    <img class="character-picture" src="https://images5.fanpop.com/image/photos/25600000/Harry-Potter-Wallpaper-harry-potter-25653343-1024-768.jpg" alt=""/>
                    <h1 class="character-name">Harry Potter</h1>
                </div>
            </div>
            <ul id="message-list" class="chat-message-list">
                <li class="message received">
                    <span class="message-text">Hola</span>
                </li>
                <li class="message sent">
                    <span class="message-text">Aló</span>
                </li>
                <li class="message received">
                    <span class="message-text">Adiós</span>
                </li>
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

    return chatElement;
}