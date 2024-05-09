import { header } from "../components/header";

document.addEventListener("DOMContentLoaded", function() {
    const headerElement = header();
});

const closeBtn = document.querySelector("#close-btn");
const closeCheckbox = document.querySelector("#check");

closeBtn.addEventListener('click', closeFilter);

function closeFilter() {
    closeCheckbox.click();
<<<<<<< HEAD
}
=======
  }
>>>>>>> 26eb1bc3ba363b806edbc3c3cc4bf9e0f940b086
