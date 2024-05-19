import { ChatComponent } from "../components/ChatComponent.js";
import { communicateWithOpenAI } from "../lib/OpenAIApi.js"

export default function ChatView() {
    const chatViewElement = document.createElement('div');
    const chatComponentElement = ChatComponent();
    
    communicateWithOpenAI("Harry Potter", "Protagonista de Harry Potter", "Dime quienes son tus padres");
  
    chatViewElement.appendChild(chatComponentElement);
   
    return chatViewElement;
}


