import { services } from "../../data/services";
import ServicesAccordion from "./ServicesAccordion";
import "./ServicesComponent.scss";

const ServicesComponent = () => {
  return (
    <div className="ServicesComponent" id="services">
      <h2>Наши услуги</h2>
      <ServicesAccordion services={services} />
    </div>
  );
};

export default ServicesComponent;
