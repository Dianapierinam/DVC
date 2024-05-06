export const mainfilter = () => {
const main = document.createElement("main")
main.innerHTML = ` 
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
            <button id="filterButton" data-testid="button-clear">Borrar filtro</button>
            <div class="buho" id="clearData">
                <img src="img/buho.png" alt="Buho">
                <div class="tooltip">Revelio
                    <span class="tooltiptext">Revisa el año donde más personajes nacieron</span>
                </div>
            </div>  `;
            return main ;
};

    

