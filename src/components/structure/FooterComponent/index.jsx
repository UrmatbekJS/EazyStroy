import "./FooterComponent.scss";

const FooterComponent = () => {
  const phoneNumber = "+996708970597"; // Замените на ваш номер телефона

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="FooterComponent" id="footer">
      <div className="FooterComponent__Title">
        <h2>Наше местоположение</h2>
      </div>
      <div className="FooterComponent__Map">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=74.5705,42.8650,74.5714,42.8654&layer=mapnik&marker=42.8652,74.5709"
          width="300"
          height="200"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          title="OpenStreetMap"
        ></iframe>
      </div>
      <div className="FooterComponent__Address">
        <a
          href="https://2gis.kg/bishkek/geo/15763234351124687/74.571186,42.865217"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>г. Бишкек, ул. Асаналиева 16, конт. 11-12а</p>
        </a>
      </div>
      <div className="FooterComponent__Number">
        <a
          href="https://2gis.kg/bishkek/geo/15763234351124687/74.571186,42.865217"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCall}
        >
          <p>+996-(708)-970-597</p>
        </a>
        <p>Максут</p>
      </div>
      <div className="FooterComponent__Social">
        <a
          href="https://www.instagram.com/abdykalyiev_a?igsh=aDk5bGtyeDE5aW16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icon_instagram.png"
            alt="Instagram"
            id="instagram"
          />
        </a>
        <a
          href="https://wa.me/996708970597"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/icon_whatsapp.png" alt="Whatsapp" id="whatsapp" />
        </a>
      </div>
      <div className="FooterComponent__Rights">
        <p>Все права защищены &copy; {new Date().getFullYear()}</p>
      </div>
      <div className="FooterComponent__Creator">
        <div className="FooterComponent__Creator_Left">
          <p>Made by </p>
        </div>
        <div className="FooterComponent__Creator_Right">
          <a href="" className="FooterComponent__Creator_Right_Link">
            <img
              src="/public/images/icon_instagram_small.png"
              alt="Instagram"
            />
            <p>sadykov__u</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
