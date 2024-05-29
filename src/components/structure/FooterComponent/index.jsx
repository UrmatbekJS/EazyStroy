import "./FooterComponent.scss";

const FooterComponent = () => {
  const phoneNumber = "+996755557312"; // Замените на ваш номер телефона

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="FooterComponent" id="footer">
      <p>Вы можете найти нас в</p>

      <div className="FooterComponent__Img">
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
          href="https://wa.me/996707310701" // правильный формат URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/icon_whatsapp.png" alt="Whatsapp" id="whatsapp" />
        </a>
      </div>
      <h2 className="FooterComponent__Call" onClick={handleCall}>
        +996-707-310-701
      </h2>
    </div>
  );
};

export default FooterComponent;
