import { ChatComponent } from "../components/ChatComponent.js";

export default function GroupChatView() {
    const groupChatViewElement = document.createElement('div');
    const groupChatComponentElement = ChatComponent();
   
    groupChatViewElement.appendChild(groupChatComponentElement); 

    return groupChatViewElement;
}