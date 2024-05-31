import "./GoodsComponent.scss";
import GoodsCard from "./GoodsCard";
import { goods } from "../../data/goods";

const GoodsComponent = () => {
  return (
    <div className="GoodsComponent" id="goods">
      <h2>Наши товары</h2>
      <div className="GoodsComponent__Cards">
        {goods.map((item) => (
          <GoodsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GoodsComponent;
