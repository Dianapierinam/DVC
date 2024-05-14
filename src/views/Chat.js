export function chat() {
    const chatElement = document.createElement('div');

    chatElement.innerHTML = `
    <div id="chat-Container">
        <div id="chat-character">
            <button onclick="history.back()" class="returnchat">Regresar</button>
            <div id="chat-character">
                <h1>Harry Potter</h1>
                <img class="profile-picture" src="https://images5.fanpop.com/image/photos/25600000/Harry-Potter-Wallpaper-harry-potter-25653343-1024-768.jpg" alt=""/>
            </div>
        </div>
        <ul id="message-list">
            <li class="message received">
                <span class="message-text">Hola</span>
            </li>
            <li class="message received">
                <span class="message-text">Aló</span>
            </li>
            <li class="message received">
                <span class="message-text">Adiós</span>
            </li>
        </ul>
        <div id="chat-input">
            <form id="message-form">
                <textarea id="message-input" placeholder="Escribe aquí tu mensaje"></textarea>
                <button id="sendMessage" class="btn-send">
                    <img src="img/btn-send.svg" fill="currentColor"/>
                </button>
            </form>
        </div>
    </div>
    `;

    return chatElement;
}

export default function ChatView() {
    const element = document.createElement('div');
    const chatElement = chat();
    
    // Agrega el pie de página al final del contenido de la página principal
    element.appendChild(chatElement); 
   
    return element;
}