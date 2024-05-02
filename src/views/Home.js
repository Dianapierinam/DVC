import{header} from "../components/header.js"
import{footer} from "../components/footer.js"
import data from '../data/dataset.js';
import {navigateTo} from '../router.js';


export function Home(props) {
    // Crea el elemento que contiene la vista de la página principal
    const HomeView = document.createElement('div');
    HomeView.textContent = 'Welcome to the home page!';

    // Llama a la función header para obtener el elemento de encabezado
    const headerElement = header();

    // Llama a la función footer para obtener el elemento de pie de página
    const footerElement = footer(); // Se agrega esta línea

    // Agrega el encabezado al principio del contenido de la página principal
    HomeView.insertBefore(headerElement, HomeView.firstChild);

    // Agrega el pie de página al final del contenido de la página principal
    HomeView.appendChild(footerElement); // Se cambia HomeView.insertBefore por HomeView.appendChild

    // Devuelve el elemento que contiene la vista de la página principal y el encabezado
    return HomeView;
}

// Exporta el componente Home
export default Home;







