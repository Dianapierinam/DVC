import { filterData, sortData } from "../lib/DataFunctions.js";
import { renderCardList } from "../lib/common.js";
import data from '../data/dataset.js';

export function header() {
  // Crea el elemento de encabezado
  const headerElement = document.createElement('header');

  // Agrega el contenido dinámico al encabezado
  headerElement.innerHTML = `
        <div class="titulo">
            <img src="img/titulo.png" alt="Titulo">
        </div>
        <h1></h1>
        <input type="checkbox" id="check" class="check">
        <label for="check" class="checkbtn">
            <img src="img/menu responsive.png" alt="Menu responsive">
        </label>
        <nav class="navigation">
            <label for="check">
                <span id="close-btn" class="cerrar-button">&times;</span>
            </label>
            <div class="filtro">
                <label for="filtrarCasa" class="label-filtro">Filtrar por casa</label>
                <select id="filtrarCasa" name="casaDeOrigen" data-testid="select-filter" value="">
                    <option value="" disabled selected>Seleccionar Casa</option>
                    <option value="gryffindor">Gryffindor</option>
                    <option value="hufflepuff">Hufflepuff</option>
                    <option value="ravenclaw">Ravenclaw</option>
                    <option value="slytherin">Slytherin</option>
                    <option value="noTienenCasa">No tienen casa</option>
                </select>
            </div>
            <div class="filtro">
                <label for="filtrarPorRaza" class="label-filtro">Filtrar por raza</label>
                <select id="filtrarPorRaza" name="raza">
                    <option value="" disabled selected>Seleccionar Raza</option>
                    <option value="sangreMestiza">Sangre mestiza</option>
                    <option value="sangreSucia">Sangre sucia</option>
                    <option value="sangrePura">Sangre pura</option>
                    <option value="sangreDeElfo">Sangre de elfo</option>
                    <option value="semiGigante">Semi Gigante</option>
                </select>
            </div>
            <div class="filtro">
                <label for="order" class="label-filtro">Ordenar</label>
                <select id="order" name="name" data-testid="select-sort">
                    <option value="" disabled selected>Selecciona orden</option>
                    <option value="asc">Nombre (A-Z)</option>
                    <option value="desc">Nombre (Z-A)</option>
                </select>
            </div>
            <div>
            <button id="chatGrupal" class="group-chat">Chat Grupal</button>
            </div>
            <button id="filterButton" data-testid="button-clear">Borrar filtro</button>
            <div class="buho" id="clearData">
                <img src="img/buho.png" alt="Buho">
                <div class="tooltip">Revelio
                    <span class="tooltiptext">Revisa el año donde más personajes nacieron</span>
                </div>
            </div>
        </nav>
    `;

  const filterChange = () => {
    let datosFiltrados = data;

    if (elFilterCasa.value) {
      datosFiltrados = filterData(datosFiltrados,"casaDeOrigen", elFilterCasa.value);
    }

    if (elFilterRaza.value) {
      datosFiltrados = filterData(datosFiltrados ,"raza", elFilterRaza.value);
    }

    datosFiltrados = sortData(datosFiltrados, "name", elOrder.value);

    renderCardList(datosFiltrados);
  };

  const elFilterCasa = headerElement.querySelector("#filtrarCasa");
  const elFilterRaza = headerElement.querySelector("#filtrarPorRaza");
  const elOrder = headerElement.querySelector("#order");
  const filterButton = headerElement.querySelector('#filterButton'); 

  elFilterCasa.addEventListener("change", filterChange);
  elFilterRaza.addEventListener("change", filterChange);
  elOrder.addEventListener("change", filterChange);

  filterButton.addEventListener("click", borrarFiltros);
  function borrarFiltros() {
    elFilterCasa.value = ""; 
    elFilterRaza.value = ""; 
    elOrder.value = "";
    filterChange(); 
  }

  return headerElement;
}





  
