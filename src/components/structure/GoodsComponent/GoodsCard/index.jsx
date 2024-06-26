import PropTypes from "prop-types";
import "./GoodsCard.scss";

const GoodsCard = () => {
  return (
    <div className="GoodsCard">
      <img src="" alt="" />
      <h3></h3>
      <div className="GoodsCard__Btn">В наличии</div>
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
