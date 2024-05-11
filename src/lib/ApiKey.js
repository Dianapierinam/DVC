//Utilizarlo para hacer validaciones - chat 
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