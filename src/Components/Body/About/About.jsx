import { FaCode, FaMicrochip, FaRobot } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import SectionsHead from "../SectionsTop";
import "./About.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { FiDatabase } from "react-icons/fi";

const About = () => {
  return (
    <div className="about" id="about">
      <SectionsHead section="about" />
      <div className="about-head">
        <h1 className="about-section-header">
          About <span className="me">Me</span>
        </h1>
      </div>

      <div className="about-about-card">
        <div className="about-header">
          <p>Fullstack Developer & Multidisciplinary Technologist</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <p>
              I am <span className="about-highlight">Md Abdus Sabur</span>, a
              passionate{" "}
              <span className="about-highlight">
                Fullstack Web Application Developer
              </span>{" "}
              from Bangladesh, currently pursuing a BSc in{" "}
              <span className="about-highlight">Mathematics</span> while also
              studying for a diploma in{" "}
              <span className="about-highlight">
                Computer Science and Technology
              </span>
              . My journey as a self-taught programmer has allowed me to
              cultivate a deep love for coding, and I find great joy in sharing
              my knowledge with others.
            </p>
          </div>

          <div className="about-skills-container">
            <div className="about-skill-card">
              <div className="about-skill-title">
                <div className="about-skill-icon">
                  <FaCode />
                </div>
                Frontend Development
              </div>
              <div className="about-skill-content">
                Specializing in the{" "}
                <span className="about-highlight">React.js</span> and{" "}
                <span className="about-highlight">Next.js</span>, I excel in
                building scalable and efficient web applications.
              </div>
            </div>

            <div className="about-skill-card">
              <div className="about-skill-title">
                <div className="about-skill-icon">
                  <FiDatabase />
                </div>
                Backend Development
              </div>
              <div className="about-skill-content">
                Experience in <span className="about-highlight">Node</span>
                {", "}
                <span className="about-highlight">Express</span> and{" "}
                <span className="about-highlight">Django</span>, I excel in
                building scalable and efficient web applications.
              </div>
            </div>

            <div className="about-skill-card">
              <div className="about-skill-title">
                <div className="about-skill-icon">
                  <FaMicrochip />
                </div>
                Full Stack Development
              </div>
              <div className="about-skill-content">
                Full Stack Web Application using{" "}
                <span className="about-highlight">React.js</span>{" "}
                <span className="about-highlight">Next.js</span>{" "}
                <span className="about-highlight">Node</span>,{" "}
                <span className="about-highlight">Express</span> and{" "}
                <span className="about-highlight">MongoDB</span> via
                <span className="about-highlight"> REST Api</span>{" "}
              </div>
            </div>

            <div className="about-skill-card">
              <div className="about-skill-title">
                <div className="about-skill-icon">
                  <FaCloudDownloadAlt />
                </div>
                Web Scraping
              </div>
              <div className="about-skill-content">
                Proficient in extracting valuable insights and data using tools
                like <span className="about-highlight">Python</span>
                {", "}
                <span className="about-highlight">Selenium</span> and{" "}
                <span className="about-highlight">Beautiful Soup</span>.
              </div>
            </div>
          </div>

          <div className="about-section">
            <p>
              In addition to my programming expertise, I am a certified{" "}
              <span className="about-highlight">electrician</span> with
              extensive knowledge of{" "}
              <span className="about-highlight">computer hardware</span> and{" "}
              <span className="about-highlight">electrical</span> systems. This
              multidisciplinary background enhances my problem-solving abilities
              and analytical skills, which are further strengthened by my
              academic pursuits in{" "}
              <span className="about-highlight">advanced mathematics</span>.
            </p>
          </div>

          <div className="about-mission-statement">
            <div className="about-mission-icon">
              <GiBullseye />
            </div>
            <p>
              My mission is to craft practical and visually appealing
              user-centric solutions. I am dedicated to delivering exceptional
              value, ensuring that each project reflects a personal touch,
              making it unique and engaging. Whether it&apos;s developing
              software, automating tasks, or building interactive systems, my
              goal is to communicate ideas in the most creative and impactful
              way.
            </p>
            <div className="about-signature">- Md Abdus Sabur</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
