import "./GoodsComponent.scss";
import GoodsCard from "./GoodsCard";
import { goods } from "../../data/goods";
import ServicesComponent from "../ServicesComponent";

const GoodsComponent = () => {
  return (
    <div className="GoodsComponent" id="goods">
      <h2>Наши товары</h2>
      <div className="GoodsComponent__Catalog">
        <h3>Стройматериалы</h3>
        <h3>Сантехника</h3>
        <h3>Электрика</h3>
      </div>
      <div className="GoodsComponent__Cards">
        {goods.map((item) => (
          <GoodsCard key={item.id} item={item} />
        ))}
      </div>
      <ServicesComponent />
    </div>
  );
};

export default GoodsComponent;
