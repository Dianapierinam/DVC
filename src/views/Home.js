import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { navigateTo } from "../router.js";
import data from '../data/dataset.js';

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
        navigateTo("/chat");
    });

    cardInfoElement.appendChild(cardNameElement);
    cardInfoElement.appendChild(cardDescriptionElement);
    cardInfoElement.appendChild(chatButton);

    card.appendChild(imgElement);
    card.appendChild(cardInfoElement);

    cardListElement.appendChild(card);
}

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
};

export function Home(props) {
    const HomeView = document.createElement('div');
    const headerElement = header();
    const cardListElement = renderCardList(data);
    const footerElement = footer();

    HomeView.appendChild(cardListElement);
    HomeView.insertBefore(headerElement, HomeView.firstChild);
    HomeView.appendChild(footerElement);

    const buhoBtn = HomeView.querySelector(".buho");
    buhoBtn.addEventListener('click', function() {
        navigateTo("/calculation");
    });

    const groupBtn = HomeView.querySelector(".groupchat");
    if (groupBtn) {
        groupBtn.addEventListener('click', function() {
            navigateTo("/groupChat");
        });
    }

    

    return HomeView;
}

export default Home;
