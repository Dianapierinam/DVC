


let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString.search);
  return Object.fromEntries(params);
};

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = '';
  if (pathname === '/calculation') {
    const calculationView = Calculation();
    rootEl.appendChild(calculationView);
  } else {
    // Resto del enrutamiento
  }
   rootEl.appendChild(ROUTES[pathname](props));
};

export const navigateTo = (pathname, props = {}) => {
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






























// export class Router {

//     // Definición de la clase Router
    
    
//         //Constructor
//         constructor(paths){
//             this.paths = paths;
//             this.initRouter(); // Corrección aquí
//         }
    
//         //Metodo para iniciar el router
//         initRouter(){
//             const { location: { pathname = '/' } } = window;
//             const URI = pathname === '/' ? 'home' : pathname.replace('/', '');
//             this.load(URI);
//         }
    
//         //Metodo cargar las vistas
//         load(page = 'home') {
//             console.log('Cargando página:', page);
//             const { paths } = this;
//             const { path, template } = paths[page] || {};
//             if (!path || !template) {
//                 console.error(`No se encontró la página '${page}' en las rutas.`);
//                 return;
//             }
//             console.log('Path:', path);
//             console.log('Template:', template);
//             const $CONTAINER = document.querySelector('#content');
//             console.log('$CONTAINER:', $CONTAINER);
//             window.history.pushState({}, 'done', path);
//             $CONTAINER.innerHTML = template; // Asegúrate de que esta línea esté agregando el contenido al contenedor
//         }
//     } 



