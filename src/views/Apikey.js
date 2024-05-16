import { setDataInLocalStorage } from "../lib/ApiKey.js";
import { navigateTo } from "../router.js";

export default function ApiKey() {
    // Crea el elemento de encabezado
    const elApiKey = document.createElement('div');
    const Textllave = document.createElement('h3');
    const enterAPI = document.createElement('button');

    // Agrega el contenido dinámico al encabezado
    elApiKey.innerHTML = `
      <div class="api-key-container">
        <h3>Llave de acceso</h3>
        <input type="text" id="input-api-key" name="apikey">
        <div class="api-botones">
          <label for="miCheckbox">
            <input type="checkbox" id="miCheckbox" name="miCheckbox">
            Usar Llave
          </label>
          <button id="btn-save" type="submit">Ingresar</button>
        </div>
      </div>
    `;
    const checkboxElement = elApiKey.querySelector('#miCheckbox');
    checkboxElement.addEventListener('change', function() {
      
        if (this.checked) {
          inputKeyElement.value = "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";
        } else {
          inputKeyElement.value = ""; 
        }
      });
    const btnSaveElement = elApiKey.querySelector('#btn-save'); 
    const inputKeyElement = elApiKey.querySelector('#input-api-key');
    

    
 

    btnSaveElement.addEventListener('click', function() {
      const apiKey = inputKeyElement.value;

      setDataInLocalStorage("api-key", apiKey);
      navigateTo("/");
    });

    return elApiKey
}