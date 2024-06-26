import  { useRef } from "react";
import "./gig.css";

const Node =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625469/skills/node_jyqdtm.svg";
const Express =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714626220/skills/expressjs_logo_icon_169185_ghdpth.png";
const Mongodb =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625458/skills/mongoDB_ea6d5z.svg";
const Postgress =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625474/skills/Postgres_ai4xpa.png";
const Python =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625478/skills/python_iyap2d.svg";
const DjangoLogo =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625426/skills/django_becgqc.svg";
const Django =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625424/skills/django_oibf56.png";
const Mysql =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625461/skills/mysql_himvkh.svg";
const Reactsvg =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625482/skills/react_mhmvyt.svg";
const Next =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625466/skills/nextJS_or0pmc.svg";
const Redux =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714626072/skills/redux-icon_ue61qp.webp";

const Gig = () => {
  const ref = useRef(null);
  return (
    <div
      className="gig-section"
      ref={ref}
      style={{ height: ref?.current?.getBoundingClientRect().width / 1.66 }}
    >
      <div className="gig-back"></div>
      <div className="gig-front">
        <svg
          className="wave1"
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="var(--color1)" offset="0%"></stop>
              <stop stop-color="var(--color3)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,196L10,163.3C20,131,40,65,60,81.7C80,98,100,196,120,196C140,196,160,98,180,65.3C200,33,220,65,240,114.3C260,163,280,229,300,253.2C320,278,340,261,360,269.5C380,278,400,310,420,310.3C440,310,460,278,480,261.3C500,245,520,245,540,236.8C560,229,580,212,600,236.8C620,261,640,327,660,310.3C680,294,700,196,720,130.7C740,65,760,33,780,89.8C800,147,820,294,840,343C860,392,880,343,900,343C920,343,940,392,960,359.3C980,327,1000,212,1020,138.8C1040,65,1060,33,1080,73.5C1100,114,1120,229,1140,253.2C1160,278,1180,212,1200,155.2C1220,98,1240,49,1260,24.5C1280,0,1300,0,1320,65.3C1340,131,1360,261,1380,334.8C1400,408,1420,425,1430,432.8L1440,441L1440,490L1430,490C1420,490,1400,490,1380,490C1360,490,1340,490,1320,490C1300,490,1280,490,1260,490C1240,490,1220,490,1200,490C1180,490,1160,490,1140,490C1120,490,1100,490,1080,490C1060,490,1040,490,1020,490C1000,490,980,490,960,490C940,490,920,490,900,490C880,490,860,490,840,490C820,490,800,490,780,490C760,490,740,490,720,490C700,490,680,490,660,490C640,490,620,490,600,490C580,490,560,490,540,490C520,490,500,490,480,490C460,490,440,490,420,490C400,490,380,490,360,490C340,490,320,490,300,490C280,490,260,490,240,490C220,490,200,490,180,490C160,490,140,490,120,490C100,490,80,490,60,490C40,490,20,490,10,490L0,490Z"
          ></path>
        </svg>
        <h1 className="gig-head">Web Application</h1>
        <div className="gig-body">
          <div className="gig-right">
            <div className="gig-header">
              <div className="gig-mern">
                <div style={{ background: "#10944D" }}>
                  <img src={Mongodb} alt="" />
                  <span style={{ color: "white" }}>M</span>
                </div>
                <div style={{ background: "black" }}>
                  <img src={Express} alt="" />
                  <span style={{ color: "white" }}>E</span>
                </div>
                <div style={{ background: "#5ED3F3" }}>
                  <img src={Reactsvg} alt="" />
                  <span style={{ color: "white" }}>R</span>
                </div>
                <div style={{ background: "#87BF00" }}>
                  <img src={Node} alt="" />
                  <span style={{ color: "black" }}>N</span>
                </div>
              </div>
              <img
                height="130px"
                style={{
                  borderRadius: "10px",
                  border: "1px solid white",
                  outline: "1px solid black",
                }}
                src={Django}
                alt=""
              />
            </div>
            <div className="mern-tech">
              <div className="front-end">
                <h1>Front End</h1>
                <div className="ul">
                  <div
                    className="li"
                    style={{ background: "#5ED3F3", color: "white" }}
                  >
                    <img src={Reactsvg} alt="" />
                    React JS
                  </div>
                  <div
                    className="li"
                    style={{ background: "#7248B6", color: "white" }}
                  >
                    <img src={Redux} alt="" />
                    Redux
                  </div>
                  <div className="li" style={{ background: "black" }}>
                    <img src={Next} alt="" />
                    Next JS
                  </div>
                </div>
              </div>
              <div className="front-end">
                <h1>Back End</h1>
                <div className="ul">
                  <div className="li" style={{ background: "#87BF00" }}>
                    <img src={Node} alt="" />
                    Node JS
                  </div>
                  <div className="li" style={{ background: "black" }}>
                    <img src={Express} alt="" />
                    Express JS
                  </div>
                  <div className="li" style={{ background: "#10944D" }}>
                    <img src={Mongodb} alt="" />
                    MongoDB
                  </div>
                </div>
              </div>
              <div className="front-end back-end">
                <h1>Back End</h1>
                <div className="ul">
                  <div
                    className="li"
                    style={{ background: "#092e20", color: "white" }}
                  >
                    <img src={DjangoLogo} alt="" />
                    Django
                  </div>
                  <div
                    className="li"
                    style={{ background: "#DD8800", color: "#015C87" }}
                  >
                    <img src={Mysql} alt="" />
                    MySQL
                  </div>
                  <div
                    className="li"
                    style={{ background: "#31648C", color: "white" }}
                  >
                    <img src={Postgress} alt="" />
                    PostgresSQL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
