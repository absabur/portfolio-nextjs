import SectionsHead from '../SectionsTop';
import './About.css';

const About = () => {
  return (
    <div className="about" id="about">
      <SectionsHead section="about"/>
      <div className="about-head">
        <h1 className="about-header">
          About <span className="me">Me</span>
        </h1>
      </div>

      <div className="about-para">
        <p className="about-text">
          I am a Fullstack Web Developer, currently pursuing a BSc in{" "}
          <span>Mathematics</span> while also studying for a diploma in{" "}
          <span>Computer Science and Technology</span>.
        </p>
        <p className="about-text">
          As a self-taught programmer, I find joy in dedicating my free time to
          coding. Sharing my expertise is a passion of mine, and I take pleasure
          in teaching others what I know.
        </p>
        <p className="about-text">
          In addition to my programming endeavors, I am a certified{" "}
          <span>electrician</span>, equipped with extensive knowledge in{" "}
          <span>computer hardware</span> and <span>electrical </span>
          work. My pursuit of <span>advanced mathematics</span> as a student
          further strengthens my analytical skills and problem-solving
          abilities.
        </p>
      </div>
    </div>
  );
};

export default About;
