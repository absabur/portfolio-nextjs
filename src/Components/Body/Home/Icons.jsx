"use client";
import { useEffect, useState } from "react";

import { FaCode } from "react-icons/fa6";
import { FaCodeBranch } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiDjango } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const icons = [
  {
    icon: <FaGitAlt />,
  },
  {
    icon: <SiNextdotjs />,
  },
  {
    icon: <SiTypescript />,
  },
  {
    icon: <FaSass />,
  },
  {
    icon: <FaDocker />,
  },
  {
    icon: <FaAws />,
  },
  {
    icon: <TbBrandReactNative />,
  },
  {
    icon: <FaGithub />,
  },
  {
    icon: <SiDjango />,
  },
  {
    icon: <GrMysql />,
  },
  {
    icon: <FaPython />,
  },
  {
    icon: <FaBootstrap />,
  },
  {
    icon: <SiExpress />,
  },
  {
    icon: <SiMongodb />,
  },
  {
    icon: <FaNode />,
  },
  {
    icon: <SiRedux />,
  },
  {
    icon: <FaCode />,
  },
  {
    icon: <FaCodeBranch />,
  },
  {
    icon: <FaCss3 />,
  },
  {
    icon: <FaHtml5 />,
  },
  {
    icon: <FaReact />,
  },
  {
    icon: <IoLogoJavascript />,
  },
];
const position = [
  {
    top: -20,
    left: -20,
  },
  {
    top: -20,
    left: 5,
  },
  {
    top: -20,
    left: 30,
  },
  {
    top: -20,
    left: 55,
  },
  {
    top: -20,
    left: 80,
  },
  {
    top: -20,
    left: 110,
  },
  {
    top: 0,
    left: 110,
  },
  {
    top: 20,
    left: 110,
  },
  {
    top: 40,
    left: 110,
  },
  {
    top: 60,
    left: 110,
  },
  {
    top: 85,
    left: 110,
  },
  {
    top: 107,
    left: 110,
  },
  {
    top: 107,
    left: 80,
  },
  {
    top: 107,
    left: 55,
  },
  {
    top: 107,
    left: 30,
  },
  {
    top: 107,
    left: 5,
  },
  {
    top: 107,
    left: -20,
  },
  {
    top: 80,
    left: -20,
  },
  {
    top: 60,
    left: -20,
  },
  {
    top: 40,
    left: -20,
  },
  {
    top: 20,
    left: -20,
  },
  {
    top: 0,
    left: -20,
  },
];
const Icons = () => {
  const [pos, setpos] = useState(position);
  const [change, setchange] = useState(new Date());

  function rotateArray(position) {
    // rotate anticlock
    // const lastPosition = position.pop();
    // position.unshift(lastPosition);

    // rotate clock
    const lastPosition = position.shift();
    position.push(lastPosition);

    return position;
  }

  useEffect(() => {
    setInterval(() => {
      setpos(rotateArray(pos));
      setchange(new Date());
    }, 1900);
  }, []);
  return (
    <>
      {icons.map((icon, index) => (
        <span
          key={index}
          style={{
            opacity: 1,
            transition: "top 2s linear, left 2s linear, color 0.2s linear",
            position: "absolute",
            top: pos[index].top + "%",
            left: pos[index].left + "%",
            color: index % 2 === 0 ? "var(--color1)" : "var(--color5)",
            fontSize: "25px",
          }}
        >
          {icon.icon}
        </span>
      ))}
    </>
  );
};

export default Icons;
