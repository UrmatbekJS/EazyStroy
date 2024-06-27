import { useState } from "react";
import PropTypes from "prop-types";
import "./ServicesAccordion.scss";

const ServicesAccordion = ({ services }) => {
  const [openedAccordions, setOpenedAccordions] = useState([]);

  const toggleAccordion = (servicesTitle) => {
    if (openedAccordions.includes(servicesTitle)) {
      setOpenedAccordions(
        openedAccordions.filter((title) => title !== servicesTitle)
      );
    } else {
      setOpenedAccordions([...openedAccordions, servicesTitle]);
    }
  };

  return (
    <div className="ServicesAccordion">
      {services.map((services) => (
        <div
          className="ServicesAccordion__Container"
          key={services.servicesTitle}
        >
          <div
            className={`ServicesAccordion__Title ${
              openedAccordions.includes(services.servicesTitle)
                ? "ServicesAccordionTitle__Opened"
                : "ServicesAccordionTitle__Closed"
            }`}
            onClick={() => toggleAccordion(services.servicesTitle)}
          >
            <p className="ServicesAccordion__Title_Name">
              {services.servicesTitle}
            </p>
            <p
              className={`ServicesAccordion__Title_Plus ${
                openedAccordions.includes(services.servicesTitle)
                  ? "ServicesAccordionPlus__Opened"
                  : "ServicesAccordionPlus__Closed"
              }`}
            >
              +
            </p>
          </div>
          <div
            className={`ServicesAccordionDescription ${
              openedAccordions.includes(services.servicesTitle)
                ? "ServicesAccordionDescription__Opened"
                : "ServicesAccordionDescription__Closed"
            }`}
          >
            <p>{services.servicesDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

ServicesAccordion.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      sectionName: PropTypes.string.isRequired,
      sectionDescription: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServicesAccordion;
