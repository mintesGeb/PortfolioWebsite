import "./about.css";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card-bg"></div>
        <div className="a-card">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/276/79d37559241577.5d1a137cbcc6e.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a strategic and creative thinker, which is a result of my
          training in multiple disciplines Software Development, Architecture
          and Industrial design.
        </p>
        <p className="a-desc">
          I enjoy solving problems through systems thinking and working
          collaboratively . I love taking on challenges and am eager to learn
          new things in the process.
        </p>
        <div className="a-award">
          <img
            src="https://media.defense.gov/2013/Feb/07/2000757840/-1/-1/0/130207-A-XE661-001.JPG"
            alt=""
            className="a-award-img"
          />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design</h4>
            <p className="a-award-desc">
              Training in multiple disciplines Software Development,
              Architecture and Industrial design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
