export const chatIn = () => {
    const chatElement = document.createElement('div');

    chatElement.innerHTML = `
    <button class ="returnchat">Regresar</button>
    <div id="chatfondo">
        
        <div id="dateOfPerson" class="dateOfPerson">
        <img id="personajeImg" class="personajeImg"></img>
        <p id="personajeName" class="personajeName"></p>
        </div>
        <div class = "consult">
            <textarea id="person-consult"></textarea>
            <button id= "sendButton" class ="sendButton">Enviar</button>
        </div>

    </div>
 

    `;

    return chatElement;
}
