"use client"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "") {
        toast.warning("Enter Your Name", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        return;
      }
      if (email === "") {
        toast.warning("Enter Your Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        return;
      }
      if (message === "") {
        toast.warning("Write some message", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        return;
      }
      const sendMessage = async(name, email, message)=> {
        const data = {
          name: name,
          email: email,
          message: message,
        };
        const response = await fetch("https://abs-hotel-default-rtdb.firebaseio.com/contactmessageportfolio.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });  
        const result = await response.json();
        if (result.name) {
          toast.success("Thank you for contacting me.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          setEmail("")
          setMessage("")
          setName("")
        }
        else {
          toast.error("Somthing Went Wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        }
      }
      sendMessage(name, email, message)
    };
  return (
    
    <form onSubmit={handleSubmit} method="POST">
      <ToastContainer />
    <p className="form-subtitle">
      Have a project in mind or just want to say hi? Feel free to reach
      out!
    </p>
    <div className="input">
      <span className={`label ${name ? "label-active" : ""}`}>
        Enter Your Name
      </span>
      <input
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
        name="message"
        placeholder="Type Your Message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
    </div>
    <div className="buttons">
      <button
        className="button2"
        type="reset"
        onClick={()=> {setEmail(""); setMessage(""); setName("")}}
      >
        Reset
      </button>
      <button
        className="button1"
        type="submit"
      >
        Send Message
      </button>
    </div>
  </form>
  )
}

export default Form