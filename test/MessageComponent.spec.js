import { MessageComponent } from "../src/components/MessageComponent.js";

describe("MessageComponent", () => {
  test("Debería crear un elemento de mensaje enviado por el usuario", () => {
    const message = "Mensaje enviado por el usuario";
    const modifierClass = "sent";
    const character = {
      name: "Harry Potter",
      imageUrl: "url-de-ejemplo",
    };

    const messageElement = MessageComponent(message, modifierClass, character);

    const messageText = messageElement.querySelector(".message-text");
    expect(messageText.textContent).toBe(message);
  });

  test("Debería crear un elemento de mensaje enviador por la API", () => {
    const message = "Mensaje enviador por la API";
    const modifierClass = "receibed";
    const character = {
      name: "Harry Potter",
      imageUrl: "url-de-ejemplo",
    };

    const messageElement = MessageComponent(message, modifierClass, character);
    //console.log(messageElement);

    const messageText = messageElement.querySelector(".message-text");
    expect(messageText.textContent).toBe(message);
  });
});
