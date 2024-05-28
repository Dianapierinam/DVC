import { CalculationComponent } from "../components/CalculationComponent.js";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

export function CalculationView() {
  const calculationViewElement = document.createElement("div");

  const headerElement = header();
  calculationViewElement.appendChild(headerElement);

  const calculationComponentElement = CalculationComponent();
  calculationViewElement.appendChild(calculationComponentElement);

  const footerElement = footer();
  calculationViewElement.appendChild(footerElement);

  return calculationViewElement;
}
export default CalculationView;
