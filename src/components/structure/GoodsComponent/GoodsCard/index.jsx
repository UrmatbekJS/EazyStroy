import PropTypes from "prop-types";
import "./GoodsCard.scss";

const GoodsCard = ({ item }) => {
  return (
    <div className="GoodsCard">
      <div className="GoodsCard__Data">
        <img src={item.imgUrl} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div className="GoodsCard__Btn">Подробнее</div>
    </div>
  );
};

GoodsCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default GoodsCard;
