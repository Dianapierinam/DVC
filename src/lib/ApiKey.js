export const getApiKey = () => { //get
  return localStorage.getItem('api-key');
};

export const setApiKey = (key) => {
if (key) {
  localStorage.setItem('api-key', key);// Guarda la API KEY en Local Storage
} else { //if the key is not valid
  localStorage.removeItem('api-key');//elimina la API KEY de Local Storage
}
};

export const getDataInLocalStorage = (keyName) => {
  const data = localStorage.getItem(keyName);

  if (typeof data == "string") {
      return localStorage.getItem(keyName);
  } else {
      return JSON.parse(localStorage.getItem(keyName));
  }
}

export const setDataInLocalStorage = (keyName, data) => {
  if (typeof data == "string") {
      localStorage.setItem(keyName, data);    
  } else {
      localStorage.setItem(keyName, JSON.stringify(data));
  }
}

export const clearLocalStorage = () => {
  localStorage.clear();
}