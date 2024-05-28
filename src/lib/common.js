import { navigateTo } from "../router.js";

export function renderCardList(data) {
  let cardListElement = document.getElementById("card-list");

  if (!cardListElement) {
    cardListElement = document.createElement('ul');
    cardListElement.setAttribute('id', 'card-list');
    cardListElement.classList.add('cardList');
  } else {
    cardListElement.innerHTML = "";
  }

  data.forEach((item) => renderCardElement(item, cardListElement));

  return cardListElement;
}

export function renderCardElement(item, cardListElement) {
  const card = document.createElement('li');
  card.classList.add('card');

  const imgElement = document.createElement('img');
  imgElement.src = item.imageUrl;
  imgElement.classList.add('cardImg');

  const cardInfoElement = document.createElement('div');

  const cardNameElement = document.createElement('h2');
  cardNameElement.classList.add('cardName');
  cardNameElement.textContent = item.name;

  const cardDescriptionElement = document.createElement('p');
  cardDescriptionElement.textContent = item.shortDescription;

  const chatButton = document.createElement('button');
  chatButton.textContent = 'Chatea conmigo';
  chatButton.className = 'chatButton';

  chatButton.addEventListener('click', function() {
    const params = {
      character_id: item.id,
    }; 

    navigateTo("/chat", params);
  });

  cardInfoElement.appendChild(cardNameElement);
  cardInfoElement.appendChild(cardDescriptionElement);
  cardInfoElement.appendChild(chatButton);

  card.appendChild(imgElement);
  card.appendChild(cardInfoElement);

  cardListElement.appendChild(card);
}