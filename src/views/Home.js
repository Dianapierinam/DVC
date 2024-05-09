import{ header } from "../components/header.js"
import{ footer } from "../components/footer.js"
import{ navigateTo } from "../router.js"
import data from '../data/dataset.js';
<<<<<<< HEAD

//import{cardelement} from "../componentes/card.js"
//import data from '../data/dataset.js';
//import {navigateTo} from '../router.js';

export function renderCardElement(item, cardListElement) {
    const card = document.createElement('li');
    card.classList.add('card')
        
    const imgElement = document.createElement('img');
    imgElement.src = item.imageUrl;
    imgElement.classList.add('cardImg');

    const cardInfoElement = document.createElement('div');
    
    const cardNameElement = document.createElement('h');
    cardNameElement.classList.add('cardName');
    cardNameElement.textContent = item.name;
    
    cardInfoElement.appendChild(cardNameElement);

    card.appendChild(imgElement);
    card.appendChild(cardInfoElement);

    cardListElement.appendChild(card);
}  

export function renderCardList(data) {
    let cardListElement = document.getElementById("card-list");

    if (cardListElement) {
        cardListElement.innerHTML = "";
    } else {
        cardListElement = document.createElement('ul');
        cardListElement.setAttribute('id', 'card-list');
        cardListElement.classList.add('cardList');
    }

    data.forEach((item) => renderCardElement(item, cardListElement));

    return cardListElement;
};
=======
>>>>>>> 26eb1bc3ba363b806edbc3c3cc4bf9e0f940b086

export function renderCardElement(item, cardListElement) {
    const card = document.createElement('li');
    card.classList.add('card')
        
    const imgElement = document.createElement('img');
    imgElement.src = item.imageUrl;
    imgElement.classList.add('cardImg');

    const cardInfoElement = document.createElement('div');
    
    const cardNameElement = document.createElement('h2');
    cardNameElement.classList.add('cardName');
    cardNameElement.textContent = item.name;

    const cardDescriptionElement = document.createElement('p'); 
    cardDescriptionElement.textContent = item.shortDescription;
    
    cardInfoElement.appendChild(cardNameElement);
    cardInfoElement.appendChild(cardDescriptionElement);


    const chatButton = document.createElement('button');
    chatButton.textContent = 'Chatea conmigo';
    chatButton.className = 'chatButton';

    chatButton.addEventListener('click', function() {
        navigateTo("/chat");
    });

   
    card.appendChild(imgElement);
    card.appendChild(cardInfoElement);
    card.appendChild(chatButton);

    cardListElement.appendChild(card);
}  

export function renderCardList(data) {
    let cardListElement = document.getElementById("card-list");

    if (cardListElement) {
        cardListElement.innerHTML = "";
    } else {
        cardListElement = document.createElement('ul');
        cardListElement.setAttribute('id', 'card-list');
        cardListElement.classList.add('cardList');
    }

    data.forEach((item) => renderCardElement(item, cardListElement));

    return cardListElement;
};

export function Home(props) {
    // Crea el elemento que contiene la vista de la página principal
    const HomeView = document.createElement('div');

    // Llama a la función header para obtener el elemento de encabezado
    const headerElement = header();

    const cardListElement = renderCardList(data);
    
    HomeView.appendChild(cardListElement);

<<<<<<< HEAD
    // Llama a la función footer para obtener el elemento de pie de página
    const footerElement = footer(); // Se agrega esta línea
=======
   
    const footerElement = footer(); 
>>>>>>> 26eb1bc3ba363b806edbc3c3cc4bf9e0f940b086

    // Agrega el encabezado al principio del contenido de la página principal
    HomeView.insertBefore(headerElement, HomeView.firstChild);

    // Agrega el pie de página al final del contenido de la página principal
    HomeView.appendChild(footerElement); // Se cambia HomeView.insertBefore por HomeView.appendChild

    const buhoBtn = HomeView.querySelector(".buho");
<<<<<<< HEAD
    
    buhoBtn.addEventListener('click', function() {
       navigateTo("/calculation");
    });
=======
    buhoBtn.addEventListener('click', function() {
        navigateTo("/calculation");
     });
    const groupBtn = HomeView.querySelector(".groupchat");
    groupBtn.addEventListener('click', function() {
        navigateTo("/groupChat");
     });
>>>>>>> 26eb1bc3ba363b806edbc3c3cc4bf9e0f940b086

    // Devuelve el elemento que contiene la vista de la página principal y el encabezado
    return HomeView;
}

// Exporta el componente Home
export default Home;
