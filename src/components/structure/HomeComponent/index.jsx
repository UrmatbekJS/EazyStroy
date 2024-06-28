import "./HomeComponent.scss";
import CatalogComponent from "../CatalogComponent";
import ServicesComponent from "../ServicesComponent";
import MainComponent from "../MainComponent";

const HomeComponent = () => {
  return (
    <div className="HomeComponent">
      <MainComponent />
      <CatalogComponent />
      <ServicesComponent />
    </div>
  );
};

export default HomeComponent;
