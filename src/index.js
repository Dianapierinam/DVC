import { setRootEl, setRoutes, onURLChange } from './router.js';
import HomeView from '../views/Home.js'; 
import ChatView from './views/ChatView.js'; 
import groupView from './views/GroupChatView.js'; 
import ApiKey from './views/Apikey.js';
import CalculationView from './views/CalculationView.js'; 
import ErrorView from './views/Error.js';


// Obtener el elemento raíz
const selectRoot = document.getElementById("root");

// Definir las rutas y sus vistas asociadas
const routes = {
  '/': HomeView,
  '/api-key': ApiKey,
  '/calculation': CalculationView,
  '/chat': ChatView,
  '/group-chat': groupView,
  '/error': ErrorView, 
};

// Asignar las rutas
setRoutes(routes);

// Establecer el elemento raíz donde se renderizarán las vistas
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(selectRoot);
  onURLChange(window.location);
});

// Manejar la carga inicial de la URL
window.addEventListener("popstate", () => {
  onURLChange(window.location.href);
});





