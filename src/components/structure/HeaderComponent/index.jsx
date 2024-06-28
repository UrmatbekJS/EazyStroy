import { useEffect, useState } from "react";
import "./HeaderComponent.scss";
import VideoComponent from "./VideoComponent";
import WhatsAppComponent from "../WhatsAppComponent";

const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsBurgerMenuOpen(false); // Закрыть бургер меню при клике на ссылку
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const phoneNumber = "+996708970597"; // Замените на ваш номер телефона

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
      <div className={`HeaderComponent ${scrolled ? "scrolled" : ""}`}>
        <div className="HeaderComponent__Left">
          <a href="#header" onClick={(e) => handleClick(e, "header")}>
            <img src="/images/EazyStroy_Logo.png" alt="Logo" />
          </a>
        </div>
        <div className="HeaderComponent__Center">
          <a href="#header" onClick={(e) => handleClick(e, "header")}>
            <p>Главная</p>
          </a>
          <a href="#catalog" onClick={(e) => handleClick(e, "catalog")}>
            <p>Каталог</p>
          </a>
          <a href="#services" onClick={(e) => handleClick(e, "services")}>
            <p>Услуги</p>
          </a>
          <a href="footer" onClick={(e) => handleClick(e, "footer")}>
            <p>Контакты</p>
          </a>
        </div>
        <div className="HeaderComponent__Right" onClick={handleCall}>
          <p>Позвонить</p>
          <img src="/images/icon_call.png" alt="Call" />
        </div>
        <div className="HeaderComponent__BurgerMenu" onClick={toggleBurgerMenu}>
          <img src="/images/icon_burgermenu.png" alt="Burger Menu" />
        </div>
      </div>
      <WhatsAppComponent />
      <div className={`BurgerMenu__Content ${isBurgerMenuOpen ? "open" : ""}`}>
        {/* <div className="BurgerMenu__Close" onClick={toggleBurgerMenu}>
          <img src="/images/icon_close.png" alt="Close Menu" />
        </div> */}
        <img src="/images/EazyStroy_Logo.png" alt="Logo" />

        <div className="BurgerMenu__Links">
          <a href="#header" onClick={(e) => handleClick(e, "header")}>
            <p>Главная</p>
          </a>
          <a href="#catalog" onClick={(e) => handleClick(e, "catalog")}>
            <p>Каталог</p>
          </a>
          <a href="#services" onClick={(e) => handleClick(e, "services")}>
            <p>Услуги</p>
          </a>
          <a href="#footer" onClick={(e) => handleClick(e, "footer")}>
            <p>Контакты</p>
          </a>
          <div className="HeaderComponent__Right" onClick={handleCall}>
            <p>Позвонить</p>
          </div>
          <img
            onClick={toggleBurgerMenu}
            src="/images/icon_close.png"
            alt="Close"
          />
        </div>
      </div>
      <VideoComponent />
    </>
  );
};

export default HeaderComponent;
