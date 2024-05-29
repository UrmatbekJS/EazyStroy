import { useState } from "react";
import PropTypes from "prop-types";
import "./GoodsAccordion.scss";

const GoodsAccordion = ({ sections }) => {
  const [openedAccordions, setOpenedAccordions] = useState([]);

  const toggleAccordion = (sectionDescription) => {
    if (openedAccordions.includes(sectionDescription)) {
      // Если раздел уже открыт, закрыть его
      setOpenedAccordions(
        openedAccordions.filter((section) => section !== sectionDescription)
      );
    } else {
      // Иначе открыть его, добавив в массив открытых разделов
      setOpenedAccordions([...openedAccordions, sectionDescription]);
    }
  };

  return (
    <div className="GoodsAccordion__Main">
      {sections.map((section) => (
        <div className="GoodsAccordion" key={section.sectionDescription}>
          <div
            className={`GoodsAccordion__Title ${
              openedAccordions.includes(section.sectionDescription)
                ? "GoodsTitle__Opened"
                : "GoodsTitle__Closed"
            }`}
            onClick={() => toggleAccordion(section.sectionDescription)}
          >
            <p className="SectionDescription">{section.sectionDescription}</p>
            <p
              className={`GoodsAccordion__Title_Plus ${
                openedAccordions.includes(section.sectionDescription)
                  ? "GoodsPlus__Opened"
                  : "GoodsPlus__Closed"
              }`}
            >
              +
            </p>
          </div>
          <div
            className={`GoodsAccordion__Answer ${
              openedAccordions.includes(section.sectionDescription)
                ? "GoodsAnswer__Opened"
                : "GoodsAnswer__Closed"
            }`}
          >
            {section.data.map((item) => (
              <div className="GoodsAccordion__List" key={item.id}>
                <div className="GoodsAccordion__List_Left">
                  <img src={item.imgUrl} alt={item.name} />
                  {item.name}
                </div>
                <div className="GoodsAccordion__List_Right">
                  от {item.price} сом
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

GoodsAccordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      sectionDescription: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default GoodsAccordion;
