import "./MainComponent.scss";

const MainComponent = () => {
  return (
    <div className="MainComponent">
      <div className="MainComponent__Title">
        <img src="/images/EazyStroy_logo_svg.png" alt="Logo" />
        <h1>EazyStroy</h1>
      </div>
      <p className="MainComponent__Description">
        У нас вы найдете широкий ассортимент строительно-отделочных материалов,
        электроники и сантехники.
      </p>
      <div className="MainComponent__First">
        <div className="MainComponent__First_Left">
          <img src="/images/Стройматериалы.png" alt="" />
        </div>
        <div className="MainComponent__First_Right">
          <p>
            Наша миссия — предоставить вам самые инновационные и
            высококачественные материалы для строительства и ремонта. Мы
            постоянно обновляем наш ассортимент, чтобы предложить вам самые
            современные и эффективные решения.
          </p>
        </div>
      </div>
      <div className="MainComponent__Second">
        <div className="MainComponent__Second_Left">
          <p>
            Мы ценим каждого клиента и гарантируем индивидуальный подход к вашим
            потребностям. Независимо от масштаба вашего проекта, вы можете
            рассчитывать на нашу поддержку и профессиональные советы.
          </p>
        </div>
        <div className="MainComponent__Second_Right">
          <img src="/images/icon_handshake.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
