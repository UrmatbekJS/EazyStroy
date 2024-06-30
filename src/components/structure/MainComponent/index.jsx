import { useEffect, useRef } from "react";
import "./MainComponent.scss";

const MainComponent = () => {
  const firstLeftRef = useRef(null);
  const firstRightRef = useRef(null);
  const secondLeftRef = useRef(null);
  const secondRightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (firstLeftRef.current) {
      observer.observe(firstLeftRef.current);
    }
    if (firstRightRef.current) {
      observer.observe(firstRightRef.current);
    }
    if (secondLeftRef.current) {
      observer.observe(secondLeftRef.current);
    }
    if (secondRightRef.current) {
      observer.observe(secondRightRef.current);
    }

    return () => {
      if (firstLeftRef.current) {
        observer.unobserve(firstLeftRef.current);
      }
      if (firstRightRef.current) {
        observer.unobserve(firstRightRef.current);
      }
      if (secondLeftRef.current) {
        observer.unobserve(secondLeftRef.current);
      }
      if (secondRightRef.current) {
        observer.unobserve(secondRightRef.current);
      }
    };
  }, []);

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
        <div className="MainComponent__First_Left" ref={firstLeftRef}>
          <img src="/images/Стройматериалы.png" alt="Стройматериалы" />
        </div>
        <div className="MainComponent__First_Right" ref={firstRightRef}>
          <p>
            Наша миссия — предоставить вам самые инновационные и
            высококачественные материалы для строительства и ремонта. Мы
            постоянно обновляем наш ассортимент, чтобы предложить вам самые
            современные и эффективные решения.
          </p>
        </div>
      </div>
      <div className="MainComponent__Second">
        <div className="MainComponent__Second_Left" ref={secondLeftRef}>
          <p>
            Мы ценим каждого клиента и гарантируем индивидуальный подход к вашим
            потребностям. Независимо от масштаба вашего проекта, вы можете
            рассчитывать на нашу поддержку и профессиональные советы.
          </p>
        </div>
        <div className="MainComponent__Second_Right" ref={secondRightRef}>
          <img src="/images/handshake (1).png" alt="Handshake" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
