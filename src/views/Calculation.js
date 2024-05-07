//import { calculation } from "../components/calculation";

export function Calculation(props) {
  const CalculationView = document.createElement('div');
  CalculationView.innerHTML = `
  <div id="mostrar-grafica">
  <div id="mostrar-mensaje">
      <h3>No se han encontrado resultados</h3>
  </div>
  </div>
  <div id="calculation">
      <img class="gif" src="img/G75K.gif" alt="">
      <div class="textpromedio">
          <div class="textpromedio-container">
              <p>El promedio de los años de nacimiento es:</p>
              <span id="textpromedio"></span>
          </div>
      </div>
  </div>
  <div class="returnmobile">
      <button id="return">Regresar</button>
  </div>
  <div id="varita"></div>

  `;
  
  return CalculationView;
}

export default Calculation;

