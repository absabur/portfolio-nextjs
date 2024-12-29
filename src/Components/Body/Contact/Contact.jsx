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
          <section className="mapbox">
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.0809500820473!2d89.35906186963028!3d24.852788215526964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc55000fef3821%3A0x78eebe4d0a10e335!2sMd%20Abdus%20Sabur!5e0!3m2!1sen!2sbd!4v1735478136036!5m2!1sen!2sbd"
                width={300}
                height={400}
                loading="lazy"
              />
            </figure>
          </section>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
