import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { navigateTo } from "../router.js";
import data from "../data/dataset.js";
import { renderCardList } from "../lib/common.js";

export function Home() {
  const HomeView = document.createElement("div");
  const headerElement = header();

  const cardListElement = renderCardList(data);
  const footerElement = footer();

  HomeView.appendChild(cardListElement);
  HomeView.insertBefore(headerElement, HomeView.firstChild);
  HomeView.appendChild(footerElement);

  const buhoBtn = HomeView.querySelector(".buho");
  buhoBtn.addEventListener("click", function () {
    navigateTo("/calculation");
  });

  const groupBtn = HomeView.querySelector(".group-chat");
  if (groupBtn) {
    groupBtn.addEventListener("click", function () {
      navigateTo("/group-chat");
    });
  }

  return HomeView;
}

export default Home;
