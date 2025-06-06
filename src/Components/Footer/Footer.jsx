
'use client'
import "./Footer.css";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const socialMediaLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/profile.php?id=100027012382655",
    icon: <FaFacebookSquare />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/md-abdus-sabur-engineer/",
    icon: <FaLinkedin />,
  },
  {
    name: "github",
    url: "https://github.com/absabur",
    icon: <FaGithubSquare />,
  },
  {
    name: "upwork",
    url: "https://www.upwork.com/freelancers/~01e234a7c4eb21e7f6",
    icon: <SiUpwork />,
  },
  {
    name: "stackoverflow",
    url: "https://stackoverflow.com/users/21513901/abdus-sabur",
    icon: <FaStackOverflow />,
  },
];

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="social-links footer-icons">
        <div className="sec-1">
          {socialMediaLinks.map((link, index) => (
            <div
              key={index}
              className={`footer-icon ${link.name}`}
              onClick={() => window.open(link.url, "_blank")}
            >
              {link.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} <span>Md Abdus Sabur</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
