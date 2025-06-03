import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const defaultOptions = {
  max: 50,
  perspective: 200,
  scale: 1.1,
};

const SkillCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Tilt key={index} options={defaultOptions}>
            <motion.div
              className="skill"
              initial={{
                background: `conic-gradient(var(--color3) 0deg, var(--color4) 0)`,
              }}
              whileInView={{
                background: `conic-gradient(var(--color3) ${
                  (360 * item.parcentage) / 100
                }deg, var(--color4) 0)`,
                transition: { duration: 1, delay: 0.1 },
              }}
            >
              <div className="skill-image">
                <p
                  style={{
                    position: "absolute",
                    bottom: "2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                    color: "var(--color3)",
                    fontWeight: "500"
                  }}
                >
                  {item.title}
                </p>
                <img src={item.image} alt={item.description.split(" ")[0]} />
                <motion.img
                  initial={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    opacity: 0,
                    scale: 1.5,
                    transition: { duration: 0.3 },
                  }}
                  data-tooltip-content={item.description}
                  data-tooltip-id="skill"
                  data-tooltip-events="click"
                  className="click-image"
                  src={item.image}
                  alt={item.description.split(" ")[0]}
                />
              </div>
            </motion.div>
          </Tilt>
        );
      })}
    </>
  );
};

export default SkillCard;
