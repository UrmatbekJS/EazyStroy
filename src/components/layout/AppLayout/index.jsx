import FooterComponent from "../../structure/FooterComponent";
import HeaderComponent from "../../structure/HeaderComponent";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div className="AppLayout">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
