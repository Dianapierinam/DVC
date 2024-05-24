
document.addEventListener("DOMContentLoaded", function() {
  // const headerElement = header();
});

const closeBtn = document.querySelector("#close-btn");
const closeCheckbox = document.querySelector("#check");

closeBtn.addEventListener('click', closeFilter);

function closeFilter() {
  closeCheckbox.click();
}
