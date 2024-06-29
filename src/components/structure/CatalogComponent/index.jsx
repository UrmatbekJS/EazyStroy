import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CatalogComponent.scss";
import Slider from "react-slick";
import ConstructionComponent from "../ConstructionComponent";
import BuildingToolsComponent from "../BuildingToolsComponent";
import HouseholdProductsComponent from "../HouseholdProductsComponent";
import { useState } from "react";

const CatalogComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : prevIndex));
  };

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
          <ConstructionComponent
            activeIndex={activeIndex}
            onPrevClick={handlePrev}
            onNextClick={handleNext}
          />
        </div>
        <div>
          <BuildingToolsComponent
            activeIndex={activeIndex}
            onPrevClick={handlePrev}
            onNextClick={handleNext}
          />
        </div>
        <div>
          <HouseholdProductsComponent
            activeIndex={activeIndex}
            onPrevClick={handlePrev}
            onNextClick={handleNext}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CatalogComponent;
