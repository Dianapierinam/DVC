import { ChatComponent } from "../src/components/ChatComponent.js";

describe("ChatComponent", () => {
  let character = {
    name: "Character",
    imageUrl: "url",
    description: "Description",
  };
});

const chatElement = ChatComponent(character);

document.getElementById("root").appendChild(chatElement);

// Obtenemos el textarea y lo llenamos con un mensaje de prueba
const textarea = document.getElementById("message-input");
textarea.value = "Mensaje de prueba";
