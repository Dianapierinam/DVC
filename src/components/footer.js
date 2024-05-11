export function footer() {
    // Crea el elemento de encabezado
    const footerContainerElement = document.createElement('div');
    const footerElement = document.createElement('footer');
    const autorsElement = document.createElement('div');

    // Agrega el contenido dinámico al encabezado
    footerElement.innerHTML = `
    <div class="footer">
        <div class="pagina">
            <img class="footHarry" src="img/titulo.png" alt="Titulo">
            <p class="foot1"></p>
            <p class="foot2">Esta página está dedicada a explorar y profundizar en 
                los diversos personajes que habitan el universo mágico de Harry Potter.</p>
        </div>
        <div class="contact">
            <h4>Contáctanos</h4>
            <p>Dirección: Calle Paris 155 - Miraflores</p>
            <p>Teléfono: 01 354 9813</p>
            <p>Correo: info@harrypotter.com</p>
        </div>
        <div class="social-link">
            <h4 class="siguenos">Síguenos</h4>
            <a class="icono1" href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="icono1" href="#"><i class="fab fa-instagram"></i></a>
            <a class="icono1" href="#"><i class="fab fa-twitter"></i></a>
            <a class="icono1" href="#"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>`;

    autorsElement.innerHTML = 
        `<div class="autores">
            <div class="copyright">
                &copy; 2024 Diana Morales - Karem Aranda
            </div>
        </div>`;

    footerContainerElement.appendChild(footerElement);
    footerContainerElement.appendChild(autorsElement);

    // Devuelve el elemento de encabezado
    return footerContainerElement;
}