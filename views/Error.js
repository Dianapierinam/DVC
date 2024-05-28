const ErrorView = () => {
  const element = document.createElement("div");
  element.innerHTML = `
  <div id="grupo-error">
  <div class="harrypotter">
    <img class="imgError" src="img/error.jpg" alt="Fondo de error">
  </div>
  <div class="cuadro">
    <p class="mensaje-error">
      <h3>La página a la que ingresaste no es la correcta, verifica que el enlace sea correcto.</h3>
    </p>
  </div>
</div>

  `;
  return element;
};

// Exporta ErrorView como valor predeterminado
export default ErrorView;
