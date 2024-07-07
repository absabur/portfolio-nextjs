import "./Contact.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import Copy from "./Copy";
import { MdMail } from "react-icons/md";
import SectionsHead from "../SectionsTop";
import Form from "./Form";

const Contact = () => {

  return (
    <div className="contact-section">
      <SectionsHead section="contact"/>
      <h1 className="contact-heading">
        Contact <span className="me">Me</span>
      </h1>
      <div className="contact-form">
        <div className="links">
          <Copy
            label={"Email"}
            data={"abdussabursayam@gmail.com"}
            icon={<MdMail />}
          />
          <Copy label={"Phone"} data={"+8801773277050"} icon={<FaPhone />} />
          <div className="location">
            <span className="icon">
              <FaLocationDot />
            </span>
            <div className="links-body">
              <span className="link-head">Address</span>
              <span
                className="copy-text"
                style={{ color: "white", cursor: "default" }}
              >
                Johurul Nagar, Bogura Sadar, Bogura, Bangladesh - (5800)
              </span>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
