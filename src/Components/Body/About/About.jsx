import SectionsHead from "../SectionsTop";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <SectionsHead section="about" />
      <div className="about-head">
        <h1 className="about-header">
          About <span className="me">Me</span>
        </h1>
      </div>

      <div className="about-para">
        <div className="section">
          <p>
            I am Md Abdus Sabur, a passionate <span>Fullstack</span> Web Developer from
            Bangladesh, currently pursuing a BSc in <span>Mathematics</span> while also
            studying for a diploma in <span>Computer Science and Technology</span>. My
            journey as a self-taught programmer has allowed me to cultivate a
            deep love for coding, and I find great joy in sharing my knowledge
            with others.
          </p>
        </div>

        <div className="section">
          <ul>
            <li style={{textIndent: "-40px", paddingLeft: "40px"}}>
              <span style={{textDecoration: "underline"}}>Web Development:</span> Specializing in the <span>MERN</span> stack
              and <span>Django</span>, I excel in building scalable and efficient web
              applications.
            </li>
            <li style={{textIndent: "-40px", paddingLeft: "40px"}}>
              <span style={{textDecoration: "underline"}}>Web Scraping:</span> Proficient in extracting valuable
              insights and data using tools like <span>Selenium</span> and <span>Beautiful Soup</span>.
            </li>
            <li style={{textIndent: "-40px", paddingLeft: "40px"}}>
              <span style={{textDecoration: "underline"}}>Automation:</span> Experience in automating tasks and
              processes to enhance efficiency and productivity.
            </li>
            <li style={{textIndent: "-40px", paddingLeft: "40px"}}>
              <span style={{textDecoration: "underline"}}>UI/UX Design:</span> Crafting user-centric, functional,
              and visually appealing designs that enhance user experiences.
            </li>
            <li style={{textIndent: "-40px", paddingLeft: "40px"}}>
              <span style={{textDecoration: "underline"}}>IoT Projects:</span> Engaged in innovative projects that
              integrate web technologies with IoT solutions.
            </li>
          </ul>
        </div>

        <div className="section">
          <p>
            In addition to my programming expertise, I am a certified 
            <span> electrician</span> with extensive knowledge of <span>computer hardware</span> and 
            <span> electrical</span> systems. This multidisciplinary background enhances my
            problem-solving abilities and analytical skills, which are further
            strengthened by my academic pursuits in <span>advanced mathematics</span>.
          </p>
        </div>

        <div className="section">
          <p>
            My mission is to craft practical and visually appealing user-centric
            solutions. I am dedicated to delivering exceptional value, ensuring
            that each project reflects a personal touch, making it unique and
            engaging. Whether it&apos;s developing software, automating tasks, or
            building interactive systems, my goal is to communicate ideas in the
            most creative and impactful way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
