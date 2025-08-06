"use client";
import { useState } from "react";
import { toast } from "sonner";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.warning("Enter Your Name");
      return;
    }
    if (email === "") {
      toast.warning("Enter Your Email");
      return;
    }
    if (message === "") {
      toast.warning("Write some message");
      return;
    }
    const sendMessage = async (name, email, message) => {
      const data = {
        name: name,
        email: email,
        message: message,
      };
      const response = await fetch(
        "https://abs-hotel-default-rtdb.firebaseio.com/contactmessageportfolio.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.name) {
        toast.success("Thank you for contacting me.");
        setEmail("");
        setMessage("");
        setName("");
      } else {
        toast.error("Somthing Went Wrong!");
      }
    };
    sendMessage(name, email, message);
  };
  return (
    <form
      style={{
        background:
          "linear-gradient(to left, var(--color5-opacity-15), var(--color1-opacity-15))",
        color: "var(--color4)",
        borderLeft: "var(--color1) 5px solid",
        borderRight: "var(--color5) 5px solid",
        borderRadius: "20px",
      }}
      onSubmit={handleSubmit}
      method="POST"
      autoComplete="off"
    >
      <p className="form-subtitle">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>
      <div className="input">
        <span className={`label ${name ? "label-active" : ""}`}>
          Enter Your Name
        </span>
        <input
          autoComplete="new-password"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="input">
        <span className={`label ${email ? "label-active" : ""}`}>
          Enter Your Email
        </span>
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="input">
        <span className={`label ${message ? "label-active" : ""}`}>
          Type Your Message
        </span>
        <textarea
          autoComplete="off"
          name="message"
          placeholder="Type Your Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          rows={7}
        ></textarea>
      </div>
      <div className="buttons">
        <button
          className="liquid-gradient-button"
          type="reset"
          onClick={() => {
            setEmail("");
            setMessage("");
            setName("");
          }}
        >
          <span className="liquid-text">Reset</span>
          <div className="liquid-overlay"></div>
        </button>
        <button className="neon-glow-button" type="submit">
          <span className="neon-text">Send Message</span>
          <span className="neon-border"></span>
        </button>
      </div>
    </form>
  );
};

export default Form;
