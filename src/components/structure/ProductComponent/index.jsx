import PropTypes from "prop-types";
import "./ProductComponent.scss";

const ProductComponent = ({
  title,
  imageSrc,
  links,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="ProductComponentWrapper">
      <div className="ProductComponent__Left" onClick={onPrevClick}>
        <img src="/images/icon_arrowNext.png" alt="Prev" />
      </div>
      <div className="ProductComponent">
        <h2>{title}</h2>
        <div className="ProductComponent__Container">
          <div className="ProductComponent__Container_Left">
            <img width={200} src={imageSrc} alt={title} />
          </div>
          <div className="ProductComponent__Container_Right">
            {links.map((link, index) => (
              <a href={link.href} key={index}>
                <p>{link.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="ProductComponent__Right" onClick={onNextClick}>
        <img src="/images/icon_arrowNext.png" alt="Next" />
      </div>
    </div>
  );
};

ProductComponent.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default ProductComponent;
