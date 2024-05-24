import { getDataInLocalStorage, setDataInLocalStorage, clearLocalStorage } from '../src/lib/ApiKey.js';

describe('getDataInLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear(); 
  });

  it('debería devolver el valor de la API Key', () => {
    const apiKey = 'someApiKey';
    localStorage.setItem('api-key', apiKey);
    expect(getDataInLocalStorage('api-key')).toEqual(apiKey);
  });

  it('debería devolver null si la API Key no está presente', () => {
    expect(getDataInLocalStorage('api-key')).toBeNull();
  });
});

describe('setDataInLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear(); 
  });

  it('debería establecer correctamente la API Key', () => {
    const apiKey = 'newApiKey';
    setDataInLocalStorage('api-key', apiKey);
    const storedApiKey = localStorage.getItem('api-key');
    expect(storedApiKey).toEqual(apiKey);
  });

  it('debería eliminar ApiKey si está vacío', () => {
    setDataInLocalStorage('api-key', '');
    const storedApiKey = localStorage.getItem('api-key');
    expect(storedApiKey).toBeNull();
  });
  
});
describe('clearLocalStorage', () => {
  it('debería limpiar todo el localStorage', () => {
    localStorage.setItem('api-key', 'someApiKey');
    clearLocalStorage();
    expect(localStorage.getItem('api-key')).toBeNull();
  });
});