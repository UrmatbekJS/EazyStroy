import { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BuildingToolsComponent from "./CatalogCardComponent/BuildingToolsComponent";
import ConstructionComponent from "./CatalogCardComponent/ConstructionComponent";
import HouseholdProductsComponent from "./CatalogCardComponent/HouseholdProductsComponent";
import "./CatalogComponent.scss";

const Arrow = ({ className, style, onClick, imgSrc, altText }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    <img src={imgSrc} alt={altText} />
  </div>
);

Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

const CatalogComponent = () => {
  const [slider, setSlider] = useState(null);

  const handlePrevClick = () => {
    slider.slickPrev();
  };

  const handleNextClick = () => {
    slider.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow imgSrc="/images/icon_arrowNext.png" altText="Next" />,
    prevArrow: <Arrow imgSrc="/images/icon_arrowPrev.png" altText="Prev" />,
  };

  return (
    <div className="CatalogComponent" id="catalog">
      <h2 className="CatalogComponent__Title">Наш каталог</h2>
      <div className="CatalogComponent__Search">
        <input type="search" placeholder="Найти товар" />
      </div>
      <div className="CatalogComponent__SliderWrapper">
        <Slider ref={(c) => setSlider(c)} {...settings}>
          <div>
            <ConstructionComponent
              onPrevClick={handlePrevClick}
              onNextClick={handleNextClick}
            />
          </div>
          <div>
            <BuildingToolsComponent
              onPrevClick={handlePrevClick}
              onNextClick={handleNextClick}
            />
          </div>
          <div>
            <HouseholdProductsComponent
              onPrevClick={handlePrevClick}
              onNextClick={handleNextClick}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CatalogComponent;
