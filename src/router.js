


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




