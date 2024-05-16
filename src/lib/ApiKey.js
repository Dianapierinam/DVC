

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

