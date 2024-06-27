import "./ConstructionComponent.scss";

const ConstructionComponent = () => {
  return (
    <div className="ConstructionComponentWrapper">
      <div className="ConstructionComponent__Left">
        <img src="/images/icon_arrowNext.png" alt="Prev" />
      </div>
      <div className="ConstructionComponent">
        <h2>Стройматериалы</h2>
        <div className="ConstructionComponent__Container">
          <div className="ConstructionComponent__Container_Left">
            <img
              width={200}
              src="/images/dataImg/constructionImg/Цемент.png"
              alt="Цемент"
            />
          </div>
          <div className="ConstructionComponent__Container_Right">
            <a href="">
              <p>Добавки для строительных растворов</p>
            </a>
            <a href="">
              <p>Монтажные пены</p>
            </a>
            <a href="">
              <p>Сыпучие материалы</p>
            </a>
            <a href="">
              <p>Гипсокартон</p>
            </a>
            <a href="">
              <p>Цемент</p>
            </a>
            <a href="">
              <p>Сухие строительные смеси</p>
            </a>
            <a href="">
              <p>Теплоизоляционные материалы</p>
            </a>
            <a href="">
              <p>Стеновые и кладочные материалы</p>
            </a>
          </div>
        </div>
      </div>
      <div className="ConstructionComponent__Right">
        <img src="/images/icon_arrowNext.png" alt="Next" />
      </div>
    </div>
  );
};

export default ConstructionComponent;
