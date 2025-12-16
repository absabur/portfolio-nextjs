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
              <span className="copy-text" style={{ cursor: "default" }}>
                Godarpara, Bogura Sadar, Bogura - 5800
              </span>
            </div>
          </div>
          <section className="mapbox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.24624951458637!2d90.3497049006094!3d23.749519203681558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1761366035997!5m2!1sen!2sbd"
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
