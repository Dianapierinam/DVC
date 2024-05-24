export function MessageComponent(message, modifierClass, character) {
  const messageElement = document.createElement('li');

  messageElement.classList.add("message");
  messageElement.classList.add(modifierClass);

  let characterInfo = '';
  if (character && character.imageUrl && character.name) {
    characterInfo = `
            <div class="character-info">
                <img class="character-image" src="${character.imageUrl}" alt="${character.name}">
                <span class="character-name">${character.name}</span>
            </div>
        `;
  }

  messageElement.innerHTML = `
        ${characterInfo}
        <span class="message-text">${message}</span>
    `;

  return messageElement;
}


