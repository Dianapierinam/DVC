import { getDataInLocalStorage } from "./lib/localStorage.js";

//objeto que mapea las rutas de nuestro sitio
let ROUTES = {};
//Referencia al elemento HTML en donde vamos a dibujar el contenido de nuestros componentes 
let rootEl;

export const setRootEl = (el) => {
  //valida si "el" es un objeto HTML
  //despues valida si el elemento exista
  rootEl = el;
};

export const setRoutes = (routes) => {
  ROUTES = routes;
};

//Se usa para que la ruta sea mas compleja, que la URL obtenga más elementos 
const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString.search);
  return Object.fromEntries(params);
};

const renderView = (pathname = "/", props = {}) => {
  rootEl.innerHTML = '';
  rootEl.appendChild(ROUTES[pathname](props));
};

export const navigateTo = (pathname = "/", props = {}) => {
  const params = new URLSearchParams(props)
  window.history.pushState(props,"",( window.location.origin + pathname + '?' + params));
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  const { pathname, search } = location;
  const apiKey = getDataInLocalStorage("api-key");

  if (apiKey) {
    const searchParams = queryStringToObject(search);
    renderView(pathname, searchParams);
  } else {
    navigateTo("/api-key");
  }

};




