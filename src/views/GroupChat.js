import { footer } from "../components/footer.js";
import { groupChat } from "../components/groupchat.js";

export default function groupChatView() {
    const element = document.createElement('div');
    const groupElement = groupChat();
    const footerElement = footer(); 
    // Agrega el pie de página al final del contenido de la página principal
    element.appendChild(groupElement); 
    element.appendChild(footerElement); 
    return element;
}