export function groupChat() {
    const groupElement = document.createElement('div');

    groupElement.innerHTML = `
        <button onclick="history.back()" id="returnChat">Regresar</button>
        <div id="groupchatfondo">
        
        
        
        
        
        
        
        
        
        
        
        </div>
    `;
    return groupElement;
}

export default function groupChatView() {
    const element = document.createElement('div');
    const groupElement = groupChat();
   
    // Agrega el pie de página al final del contenido de la página principal
    element.appendChild(groupElement); 

    return element;
}