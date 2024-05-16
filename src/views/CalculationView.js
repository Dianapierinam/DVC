import { CalculationComponent } from "../components/CalculationComponent.js";

export function CalculationView(props) {
  const calculationViewElement = document.createElement('div');
  const calculationComponentElement = CalculationComponent();

  calculationViewElement.appendChild(calculationComponentElement);
  
  return calculationViewElement;
}

export default CalculationView;
