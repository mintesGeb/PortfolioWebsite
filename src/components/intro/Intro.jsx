import "./intro.css";
import Me from "../../img/Prof2.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Mintes Gebre</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Architect</div>
              <div className="i-title-item">Industrial Designer</div>
            </div>
          </div>
          <p className="i-desc">
            I am a strategic and creative thinker, which is a result of my
            training in multiple disciplines Software Development, Architecture
            and Industrial design. I enjoy solving problems through systems
            thinking and working collaboratively . I love taking on challenges
            and am eager to learn new things in the process.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="red"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path d="M40.5 15L34.5 9L28.5 15" stroke-width="3" />
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="mintesImage" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
