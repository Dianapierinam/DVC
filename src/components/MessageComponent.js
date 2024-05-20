export function MessageComponent(message, modifierClass) {
    const messageElement = document.createElement('li');

    messageElement.classList.add("message");
    messageElement.classList.add(modifierClass);

    messageElement.innerHTML = `
        <span class="message-text">${message}</span>
    `;

    return messageElement;
}