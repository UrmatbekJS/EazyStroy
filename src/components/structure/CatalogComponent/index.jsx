import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BuildingToolsComponent from "../BuildingToolsComponent";
import ConstructionComponent from "../ConstructionComponent";
import ServicesComponent from "../ServicesComponent";
import "./CatalogComponent.scss";
import HouseholdProductsComponent from "../HouseholdProductsComponent";

const CatalogComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="CatalogComponent">
      <h2 className="CatalogComponent__Title">Наш каталог</h2>
      <div className="CatalogComponent__Search">
        <input type="search" placeholder="Найти товар" />
        <img width={25} src="/images/icon_search.png" alt="" />
      </div>
      <Slider {...settings}>
        <div>
          <ConstructionComponent />
        </div>
        <div>
          <BuildingToolsComponent />
        </div>
        <div>
          <HouseholdProductsComponent />
        </div>
      </Slider>
      <ServicesComponent />
    </div>
  );
};

export default CatalogComponent;
