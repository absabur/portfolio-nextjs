import Marquee from "react-fast-marquee";
import "./Home.css";
import ResumeClient from "./ResumeClient.js"
import SocialClient from "./SocialClient.js"
import Icons from "./Icons";
import Image from "next/image";
import SectionsHead from "../SectionsTop";
import image from "@/app/me.png"

// "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625498/skills/me_fmuyx1.png";

const Home = () => {
  return (
    <div className="home">
      <SectionsHead section="home"/>
      <div className="home-image">
        <div className="hexagon">
          <Icons />
          <div className="hexagon image-hexa">
            <Image src={image} alt="ABS" width={220} height={220}/>
          </div>
        </div>
      </div>

      <div className="content">
        <span style={{ color: "var(--color4)", fontSize: "24px" }}>
          Hey there! I&apos;m -
        </span>

        <h1 className="home-name">Md Abdus Sabur</h1>

        <span className="typewrite">
          <Marquee speed={100} pauseOnHover>
            <Post name="Frontend Developer" />
            <Post name="Backend Developer" />
            <Post name="FullStack Developer" />
          </Marquee>
        </span>

        <p className="home-bio">
        Md Abdus Sabur - Full-Stack Web Developer | Expert in JavaScript ( MERN Stack ) & Python ( Django ). Specializing in front-end and back-end development with React.js, Next.js, Redux, Django, MongoDB, MySQL, PostgreSQL, SQLite, Selenium, REST APIs, and Django REST Framework. Explore my portfolio for dynamic and robust web solutions.
        </p>

        <SocialClient />
        <ResumeClient />
      </div>
    </div>
  );
};

export default Home;

const Post = ({ name }) => {
  return (
    <span style={{ padding: "0 4rem" }}>
      <span className="quote">[ &qout;</span> {name}
      <span className="quote">&qout; ]</span>
    </span>
  );
};
