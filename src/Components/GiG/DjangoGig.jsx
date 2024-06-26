import  { useRef } from "react";
import styles from "./DjangoGig.module.css";
const BackImage =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625504/skills/home_wsx8zw.jpg";
const DjangoLogo =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625424/skills/django_oibf56.png";
const Postgress =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625474/skills/Postgres_ai4xpa.png";
const Mysql =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625461/skills/mysql_himvkh.svg";
const Python =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625478/skills/python_iyap2d.svg";
const DjanogRest =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714627156/skills/logo_yp3oro.png";

const DjangoGig = () => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      style={{ height: ref?.current?.getBoundingClientRect().width / 1.66 }}
      className={styles.djangoSection}
    >
      <div className={styles.back}>
        <img className={styles.backImage} src={BackImage} alt="" />
      </div>
      <div className={styles.front}>
        <h1 className={styles.header}>API , Backend Development</h1>
        <div className={styles.body}>
          <div className={styles.alltech}>
            <div
              className={styles.tech}
              style={{ background: "#ffde57", color: "#4584b6" }}
            >
              <img className={styles.techImg} src={Python} alt="" />
              Python
            </div>
            <div
              className={styles.tech}
              style={{ backgroundColor: "#092e20", color: "white" }}
            >
              <img className={styles.techImg} src={DjangoLogo} alt="" />
              Django
            </div>
            <div
              className={styles.tech}
              style={{ background: "#802D2D", color: "white" }}
            >
              <img className={styles.techImg} src={DjanogRest} alt="" />
              Django Rest FreamWork
            </div>
            <div
              className={styles.tech}
              style={{ background: "#057799", color: "white" }}
            >
              <img className={styles.techImg} src={Mysql} alt="" />
              MySQL
            </div>
            <div
              className={styles.tech}
              style={{ background: "#31648C", color: "white" }}
            >
              <img className={styles.techImg} src={Postgress} alt="" />
              PostgresSQL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DjangoGig;
