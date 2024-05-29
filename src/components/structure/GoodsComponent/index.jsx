import { construction, electronic, plumbing } from "../../data/goods";
import GoodsAccordion from "./GoodsAccordion";
import "./GoodsComponent.scss";

const GoodsComponent = () => {
  const sections = [
    {
      sectionDescription: "Строительно-отделочные материалы",
      data: construction,
    },
    {
      sectionDescription: "Сантехника",
      data: plumbing,
    },
    {
      sectionDescription: "Электроника",
      data: electronic,
    },
  ];

  return (
    <div className="GoodsComponent" id="goods">
      <h2>Вы можете ознакомиться с полным каталогом товаров.</h2>
      <GoodsAccordion sections={sections} />
    </div>
  );
};

export default GoodsComponent;
