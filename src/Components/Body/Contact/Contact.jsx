import "./Contact.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import Copy from "./Copy";
import { MdMail } from "react-icons/md";
import SectionsHead from "../SectionsTop";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="contact-section">
      <SectionsHead section="contact" />
      <h1 className="contact-heading">
        Contact <span className="me">Me</span>
      </h1>
      <div className="contact-form">
        <div className="links">
          <Copy
            label={"Email"}
            data={"absabur929@gmail.com"}
            icon={<MdMail />}
          />
          <Copy label={"Phone"} data={"+88 01773277050"} icon={<FaPhone />} />
          <div className="location">
            <span className="icon">
              <FaLocationDot />
            </span>
            <div className="links-body">
              <span className="link-head">Address</span>
              <span
                className="copy-text"
                style={{ cursor: "default" }}
              >
                Johurul Nagar, Bogura Sadar, Bogura, Bangladesh - (5800)
              </span>
            </div>
          </div>
          <section className="mapbox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d226.25881877836196!2d89.34647432342385!3d24.85903000947636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1748978327314!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </section>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
