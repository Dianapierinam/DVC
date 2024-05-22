import { ChatComponent } from "../components/ChatComponent.js";
import { communicateWithOpenAI } from "../lib/OpenAIApi.js";
import data from "../data/dataset.js";

export default function ChatView() {
    const chatViewElement = document.createElement('div');
    const params = new URLSearchParams(window.location.search);
    const characterId = params.get('character_id');
    const character = data.find(persona => persona.id == characterId);
  // usar una condicional para en caso de que character no tuviera id, con el navigate to te mande a home
    const chatComponentElement = ChatComponent(character);
    
   // communicateWithOpenAI("Harry Potter", "Protagonista de Harry Potter", "Dime quienes son tus padres");
  
    chatViewElement.appendChild(chatComponentElement);
   
    return chatViewElement;
}

