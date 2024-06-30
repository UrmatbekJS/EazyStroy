import "./FooterComponent.scss";

const FooterComponent = () => {
  return (
    <div className="FooterComponent" id="footer">
      <div className="FooterComponent__Map">
        <iframe
          src="https://widgets.2gis.com/widget?type=place&place_id=70000001039024746&zoom=16"
          width="300"
          height="200"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          title="2GIS Map"
        ></iframe>
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
    </div>
  );
};

export default FooterComponent;
