import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GoodsComponent.scss";
import GoodsCard from "./GoodsCard";
import { goods } from "../../data/goods";
import Slider from "react-slick";

const GoodsComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="GoodsComponent">
      <video autoPlay muted loop className="GoodsComponent__Video">
        <source src="/videos/eazyStroy_video.mp4" type="video/mp4" />
      </video>
      <div className="GoodsComponent__Overlay">
        <h2>Наши товары</h2>
        <div className="GoodsComponent__Cards">
          <Slider {...settings}>
            {goods.map((item) => (
              <GoodsCard key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default GoodsComponent;
