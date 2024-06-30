import FooterComponent from "../../structure/FooterComponent";
import HeaderComponent from "../../structure/HeaderComponent";
import PropTypes from "prop-types";

const DetailsLayout = ({ children }) => {
  return (
    <div className="DetailsLayout">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

DetailsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DetailsLayout;
