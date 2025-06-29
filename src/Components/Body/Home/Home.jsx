import "./Home.css";

import SocialClient from "./SocialClient.js";
import Icons from "./Icons";
import SectionsHead from "../SectionsTop";
import RoleScroller from "./AutoScroll";

// const image = "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625498/skills/me_fmuyx1.png"

const Home = () => {
  return (
    <div className="home">
      <SectionsHead section="home" />

      <div className="home-container">
        <div className="home-content">
          <span className="home-greeting">Hey there! I&apos;m -</span>
          <h1 className="home-name">Md Abdus Sabur</h1>

          <div className="home-roles">
            <RoleScroller />
          </div>

          <p className="home-bio">
            <span className="highlight">Full-Stack Web Developer</span>. Expert
            in <span className="highlight">JavaScript (MERN Stack)</span> &{" "}
            <span className="highlight">Python (Django)</span>. Specializing in
            front-end and back-end development. Skilled in{" "}
            <span className="highlight">React.js</span>,{" "}
            <span className="highlight">Next.js</span>,{" "}
            <span className="highlight">Redux</span>,{" "}
            <span className="highlight">Django</span>,{" "}
            <span className="highlight">MongoDB</span>,{" "}
            <span className="highlight">MySQL</span>,{" "}
            <span className="highlight">PostgreSQL</span>,{" "}
            <span className="highlight">SQLite</span>,{" "}
            <span className="highlight">Selenium</span>,{" "}
            <span className="highlight">REST APIs</span>, and{" "}
            <span className="highlight">Django REST Framework</span>. Explore my
            portfolio for dynamic and robust web solutions.
          </p>

          <div className="home-actions">
            <SocialClient />
          </div>
        </div>

        <div className="home-image">
          <div className="hexagon">
            <Icons />
            <div className="hexagon image-hexa">
              <img
                src="/Md_Abdus_Sabur.png"
                alt="Md Abdus Sabur | Full Stack Developer"
                width={220}
                height={220}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const Post = ({ name }) => {
  return (
    <span style={{ padding: "0 4rem" }}>
      [ <span className="quote">&quot;</span>
      {name}
      <span className="quote">&quot;</span> ]
    </span>
  );
};
