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

<<<<<<< HEAD
const renderView = (pathname = "/", props = {}) => {
=======
const renderView = (pathname ="/", props = {}) => {
>>>>>>> 26eb1bc3ba363b806edbc3c3cc4bf9e0f940b086
  rootEl.innerHTML = '';
   rootEl.appendChild(ROUTES[pathname](props));
};

export const navigateTo = (pathname = "/", props = {}) => {
  const params = new URLSearchParams(props)
  window.history.pushState(props,"",( window.location.origin + pathname + '?' + params));
  renderView(pathname, props);
};

export const onURLChange = (location) => {
    console.log(location)
  const { pathname, search } = location;
  const searchParams = queryStringToObject(search);
  renderView(pathname, searchParams);
};




