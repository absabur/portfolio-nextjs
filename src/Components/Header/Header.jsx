"use client";
import { useEffect, useState } from "react";
import "./Header.css";
import {
  FaChartPie,
  FaEnvelopeOpenText,
  FaGraduationCap,
  FaHome,
} from "react-icons/fa";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { GrTasks } from "react-icons/gr";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import usePageMetrics from "./usePageMetrics";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [lessScroll] = useState(20);
  const { scrollbarWidth } = usePageMetrics();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      let active = sessionStorage.getItem("active");
      setActiveSection(active);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (pathname !== "/") {
      router.back();
    }
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  const scrollToAbout = () => {
    let element1 = document.querySelector(".about-section-scroll");
    window.scrollTo({
      behavior: "smooth",
      top:
        element1?.getBoundingClientRect().top + window.pageYOffset - lessScroll,
    });
  };
  const scrollToSkills = () => {
    let element1 = document.querySelector(".skills-section-scroll");
    window.scrollTo({
      behavior: "smooth",
      top:
        element1?.getBoundingClientRect().top + window.pageYOffset - lessScroll,
    });
  };
  const scrollToProjects = () => {
    let element1 = document.querySelector(".project-section-scroll");
    window.scrollTo({
      behavior: "smooth",
      top:
        element1?.getBoundingClientRect().top + window.pageYOffset - lessScroll,
    });
  };
  const scrollToEducations = () => {
    let element1 = document.querySelector(".education-section-scroll");
    window.scrollTo({
      behavior: "smooth",
      top:
        element1?.getBoundingClientRect().top + window.pageYOffset - lessScroll,
    });
  };
  const scrollToContact = () => {
    let element1 = document.querySelector(".contact-section-scroll");
    window.scrollTo({
      behavior: "smooth",
      top:
        element1?.getBoundingClientRect().top + window.pageYOffset - lessScroll,
    });
  };
  const navItems = [
    {
      label: "Home",
      onClick: scrollToTop,
      tooltipContent: "Home",
      icon: <FaHome />,
      section: "home",
    },
    {
      label: "About",
      onClick: scrollToAbout,
      tooltipContent: "About",
      icon: <TbInfoSquareRoundedFilled />,
      section: "about",
    },
    {
      label: "Skills",
      onClick: scrollToSkills,
      tooltipContent: "Skills",
      icon: <FaChartPie />,
      section: "skills",
    },
    {
      label: "Projects",
      onClick: scrollToProjects,
      tooltipContent: "Projects",
      icon: <GrTasks />,
      section: "project",
    },
    {
      label: "Education",
      onClick: scrollToEducations,
      tooltipContent: "Education",
      icon: <FaGraduationCap />,
      section: "education",
    },
    {
      label: "Contact",
      onClick: scrollToContact,
      tooltipContent: "Contact",
      icon: <FaEnvelopeOpenText />,
      section: "contact",
    },
  ];
  const homeOnly = [
    {
      label: "Home",
      onClick: scrollToTop,
      tooltipContent: "Home",
      icon: <FaHome />,
      section: "home",
    },
  ];
  return (
    <>
      <div className="scrollbar-parent">
        <div
          className="scrollbar"
          style={{
            height: `${scrollbarWidth}%`,
          }}
        ></div>
      </div>
      <div className="header-div">
        <header className="inner-header">
          <Tooltip
            style={{
              fontSize: "17px",
              color: "var(--color3)",
              backgroundColor: "var(--color2)",
              boxShadow: "0 0 5px var(--color3)",
            }}
            id="tooltip"
          />
          <nav>
            {pathname == "/"
              ? navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onClick}
                    data-tooltip-id="tooltip"
                    data-tooltip-content={item.tooltipContent}
                    className={`nav-bar-icons ${
                      activeSection === item.section &&
                      pathname == "/" &&
                      "nav-active-icon"
                    }`}
                  >
                    {item.icon}{" "}
                    <span className="nav-details">{item.label}</span>
                  </button>
                ))
              : homeOnly.map((item, index) => (
                  <Link
                    key={index}
                    href={`/`}
                    data-tooltip-id="tooltip"
                    data-tooltip-content={item.tooltipContent}
                    className={`nav-bar-icons ${
                      activeSection === item.section &&
                      pathname == "/" &&
                      "nav-active-icon"
                    }`}
                  >
                    {item.icon}{" "}
                    <span className="nav-details">{item.label}</span>
                  </Link>
                ))}
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
