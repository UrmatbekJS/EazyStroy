import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CatalogComponent.scss";
import Slider from "react-slick";
import ConstructionComponent from "../ConstructionComponent";
import BuildingToolsComponent from "../BuildingToolsComponent";
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
    <div className="CatalogComponent" id="catalog">
      <h2 className="CatalogComponent__Title">Наш каталог</h2>
      <div className="CatalogComponent__Search">
        <input type="search" placeholder="Найти товар" />
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
    </div>
  );
};

export default CatalogComponent;
