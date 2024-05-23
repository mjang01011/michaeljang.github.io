import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left"> */}
          {/* <img src={profile_img} alt="" /> */}
        {/* </div> */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate technologist with a keen interest in the wonders
              of both the digital and physical worlds. My journey spans the
              realms of machine learning, software development,
              astrophotography, and even the art of magic.
            </p>
            <p>
              Apart from studies, you will often find me gazing at the night sky
              with my camera in hand. Astrophotography allows me to combine my
              love for technology and the cosmos, capturing the beauty of
              distant galaxies, star clusters, and nebulae. It’s a humbling
              experience that constantly reminds me of the vastness of the
              universe and our small, yet significant place within it. Magic has
              also been a source of wonder and joy in my life. Performing magic
              tricks is more than just a hobby; it’s a way to connect with
              people and bring a sense of awe and excitement into their lives.
            </p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>PyTorch</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "80%" }}></hr>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
