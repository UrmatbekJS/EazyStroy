import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CatalogCardComponent.scss";

const CatalogCardComponent = ({
  title,
  imageSrc,
  links,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="CatalogCardComponentWrapper">
      <div className="CatalogCardComponent__Left" onClick={onPrevClick}>
        <img src="/images/icon_arrowNext.png" alt="Prev" />
      </div>
      <div className="CatalogCardComponent">
        <h2>{title}</h2>    
        <div className="CatalogCardComponent__Container">
          <div className="CatalogCardComponent__Container_Left">
            <img width={200} src={imageSrc} alt={title} />
          </div>
          <div className="CatalogCardComponent__Container_Right">
            {links.map((link, index) => (
              <Link to={link.href} key={index}>
                <p>{link.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="CatalogCardComponent__Right" onClick={onNextClick}>
        <img src="/images/icon_arrowNext.png" alt="Next" />
      </div>
    </div>
  );
};

CatalogCardComponent.propTypes = {
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

export default CatalogCardComponent;
