import { computeStats } from "../lib/DataFunctions.js";
import data from '../data/dataset.js';

export function CalculationComponent() {
    const calculationElement = document.createElement('div');
    const year = computeStats(data);

    calculationElement.innerHTML = `
        <div id="mostrar-grafica">
            <div id="mostrar-mensaje">
                <h3>No se han encontrado resultados</h3>
            </div>
            </div>
            <div id="calculation">
                <img class="gif" src="img/G75K.gif" alt="">
                <div class="textpromedio">
                    <div class="textpromedio-container">
                        <p>La mayoria de personajes nacieron en:</p>
                        <span id="textpromedio">${year}</span>
                    </div>
                </div>
            </div>
            <div class="returnmobile">
                <button onclick="history.back()" id="return">Regresar</button>
            </div>
        <div id="varita"></div>
    `;

    return calculationElement;
}
