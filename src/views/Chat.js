import { footer } from "../components/footer.js";
import { chat } from "../components/chat.js";

export default function ChatView() {
    const element = document.createElement('div');
    const chatElement = chat();
    const footerElement = footer(); 
    // Agrega el pie de página al final del contenido de la página principal
    element.appendChild(chatElement); 
    element.appendChild(footerElement); 
    return element;
}

