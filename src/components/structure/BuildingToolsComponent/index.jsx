import "./BuildingToolsComponent.scss";

const BuildingToolsComponent = () => {
  return (
    <div className="BuildingToolsComponentWrapper">
      <div className="BuildingToolsComponent__Left">
        <img src="/public/images/icon_arrowNext.png" alt="Prev" />
      </div>
      <div className="BuildingToolsComponent">
        <h2>Строительные инструменты</h2>
        <div className="BuildingToolsComponent__Container">
          <div className="BuildingToolsComponent__Container_Left">
            <img
              width={200}
              src="/images/BuildingToolsComponent.jpg"
              alt="Цемент"
            />
          </div>
          <div className="BuildingToolsComponent__Container_Right">
            <a href="">
              <p>Измерительные инструменты</p>
            </a>
            <a href="">
              <p>Расходные материалы</p>
            </a>
            <a href="">
              <p>Сварочные</p>
            </a>
            <a href="">
              <p>Малярно-штукатурные инструменты</p>
            </a>
            <a href="">
              <p>Ручные инструменты</p>
            </a>
            <a href="">
              <p>Строительно-монтажные инструменты</p>
            </a>
          </div>
        </div>
      </div>
      <div className="BuildingToolsComponent__Right">
        <img src="/images/icon_arrowNext.png" alt="Next" />
      </div>
    </div>
  );
};

export default BuildingToolsComponent;
