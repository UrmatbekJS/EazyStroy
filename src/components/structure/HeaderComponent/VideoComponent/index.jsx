import "./VideoComponent.scss";

const VideoComponent = () => {
  return (
    <div className="VideoComponent" id="header">
      <video autoPlay loop muted>
        <source src="/videos/eazyStroy_video.mp4" type="video/mp4" />
      </video>
      <div className="VideoComponent__Overlay">
        <h1>Добро пожаловать в EazyStroy!</h1>
        <p>
          У нас вы найдете широкий ассортимент строительно-отделочных
          материалов, электроники и сантехники.
        </p>
      </div>
    </div>
  );
};

export default VideoComponent;
