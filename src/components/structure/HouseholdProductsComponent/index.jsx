import "./HouseholdProductsComponent.scss";

const HouseholdProductsComponent = () => {
  return (
    <div className="HouseholdProductsComponentWrapper">
      <div className="HouseholdProductsComponent__Left">
        <img src="/images/icon_arrowNext.png" alt="Prev" />
      </div>
      <div className="HouseholdProductsComponent">
        <h2>Хозяйственные товары</h2>
        <div className="HouseholdProductsComponent__Container">
          <div className="HouseholdProductsComponent__Container_Left">
            <img
              width={200}
              src="/images/HouseholdProductsComponent.png"
              alt="Хозтовары"
            />
          </div>
          <div className="HouseholdProductsComponent__Container_Right">
            <a href="">
              <p>Краски</p>
            </a>
            <a href="">
              <p>Очистители</p>
            </a>
            <a href="">
              <p>Рабочие перчатки</p>
            </a>
            <a href="">
              <p>Садовый инвентарь</p>
            </a>
            <a href="">
              <p>Столярные инструменты</p>
            </a>
            <a href="">
              <p>Строительные смеси</p>
            </a>
            <a href="">
              <p>Клеи</p>
            </a>
            <a href="">
              <p>Пены</p>
            </a>
            <a href="">
              <p>Растворители</p>
            </a>
          </div>
        </div>
      </div>
      <div className="HouseholdProductsComponent__Right">
        <img src="/images/icon_arrowNext.png" alt="Next" />
      </div>
    </div>
  );
};

export default HouseholdProductsComponent;
