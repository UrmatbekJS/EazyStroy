import "./VideoComponent.scss";

const VideoComponent = () => {
  return (
    <div className="VideoComponent" id="header">
      <video autoPlay loop muted>
        <source src="/videos/eazyStroy_video.mp4" type="video/mp4" />
      </video>
      <div className="VideoComponent__Overlay">
        <h1>
          Добро пожаловать в <yellow>EazyStroy!</yellow>
        </h1>
      </div>
    </div>
  );
};

export default VideoComponent;
