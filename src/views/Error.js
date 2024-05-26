// Error.js

// Define la vista de error
const ErrorView = () => {
  const element = document.createElement("div");
  element.innerHTML = `
    <p class="titleError">Error: Page not found</p>
    <div class="harrypotter">
      <img class="imgdog" src="img/perritoIA-HP.jpeg" alt="Imagen de perrito">
    </div>
  `;
  return element;
};

// Exporta ErrorView como valor predeterminado
export default ErrorView;
