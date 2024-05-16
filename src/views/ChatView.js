
import { chatIn } from "../components/ChatComponent.js";
import { communicateWithOpenAI } from "../lib/openAIAPI.js";
import { navigateTo } from "../router.js";
import data from '../data/dataset.js';

const chatIndividual = chatIn();
const chatFondo = chatIn.querySelector('div[id="chatfondo"]');

function sendMessage (send) {
const messageElement = document.createElement('div');
messageElement.classlist.add("sendMessage");
messageElement.innerHTML = `<strong>DIANA></strong&nbsp${send}`;
chatFondo.appendChild(messageElement);
}

export const chatOne = (name) => {
const chatOne = document.createElement('div');  
chatOne.classList.add("chatContainer");
const datosPersonajes = chatIndividual.query('div[class=dateOfPerson]')
const buttonSend = chatIndividual.querySelector('button[class="sendButton"]')
const textArea = chatIndividual.querySelector("textArea");
}


const information = data.find()

datosPersonajes.querySelector
datosPersonajes.querySelector

textArea.addEvenListener('keydown',(event) => {
    if(event.key === "Enter") {
        const promptMessage = textArea.value;
        textArea.value = '';
        sendMessage(promptMessage);
        communicateWithOpenAI(personaje,promptMessage)
        .then(response => {
         
        }

        )
    }





}
)



// export default function ChatView() {
//     const element = document.createElement('div');
//     const chatElement = chat();
//     // Agrega el pie de página al final del contenido de la página principal
//     element.appendChild(chatElement); 
//     return element;
// }

