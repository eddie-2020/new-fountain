import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import WhatsApp from "./WhatsApp";
import "../styles/HomeStyle.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    // Check network connection on component mount
    handleNetworkChange();
    // Event listener for network status changes
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      // Cleanup event listeners
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  const handleNetworkChange = () => {
    if (!navigator.onLine) {
      setAlert({ type: "error", message: "Network connection is offline." });
      setTimeout(() => {
        setAlert(null);
      }, 5000);
    } else {
      setAlert(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check network connection before form submission
    if (!window.navigator.onLine) {
      setAlert({ type: "error", message: "Network connection is offline." });
      setTimeout(() => {
        setAlert(null);
      }, 5000);
      return;
    }

    let isValid = true;

    // Validate name, email, and message
    if (name.trim() === "") {
      setNameValid(false);
      isValid = false;
    } else {
      setNameValid(true);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailValid(false);
      isValid = false;
    } else {
      setEmailValid(true);
    }

    if (message.trim() === "") {
      setMessageValid(false);
      isValid = false;
    } else {
      setMessageValid(true);
    }

    if (isValid) {
      const userId = "DLlQo_tfb-flOj4z1";
      const serviceId = "service_0h3w5nq";
      const templateId = "template_f3r350s";

      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: name,
            from_email: email,
            message: message,
          },
          userId
        )
        .then((response) => {
          // console.log("Email sent successfully:", response);
          setName("");
          setEmail("");
          setMessage("");
          setAlert({ type: "success", message: "Message sent successfully!" });
          setTimeout(() => {
            setAlert(null);
          }, 5000);
        })
        .catch((error) => {
          // console.error("Error sending email:", error);
          setAlert({ type: "error", message: "Error sending email." });
          setTimeout(() => {
            setAlert(null);
          }, 5000);
        });
    }
  };

  return (
    <div className="container mx-auto text-center mt-[100px] mb-[70px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl md:text-3xl">Contact New Fountain</h1>
        <div className="mt-4 w-10 h-1 rounded-lg bg-green-400"></div>
      </div>
      {alert && (
        <div
          className={`fixed top-0 right-0 mt-4 mr-4 z-50 bg-${
            alert.type === "success" ? "green" : "red"
          }-500 text-white px-4 py-2 rounded-md`}
        >
          {alert.message}
        </div>
      )}

      <div className="mt-[50px] m-4">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <label
              htmlFor="name"
              className="flex justify-start text-sm lg:text-lg mb-2 font-semibold"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-4 py-3 text-sm lg:text-lg rounded-md border ${
                nameValid
                  ? "border-gray-300 focus:border-green-500"
                  : "border-red-500"
              } focus:outline-none`}
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameValid(true);
              }}
            />
            {!nameValid && (
              <p className="flex justify-start text-xs lg:text-[14px] text-red-500">
                Please enter your name.
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <label
              htmlFor="email"
              className="flex justify-start text-sm lg:text-lg mb-2 font-semibold"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-3 text-sm lg:text-lg rounded-md border ${
                emailValid
                  ? "border-gray-300 focus:border-green-500"
                  : "border-red-500"
              } focus:outline-none`}
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailValid(true);
              }}
            />
            {!emailValid && (
              <p className="flex justify-start text-xs lg:text-[14px] text-red-500">
                Please enter a valid email address.
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <label
              htmlFor="message"
              className="flex justify-start text-sm lg:text-lg mb-2 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={`w-full px-4 py-3 text-sm lg:text-lg rounded-md border ${
                messageValid
                  ? "border-gray-300 focus:border-green-500"
                  : "border-red-500"
              } focus:outline-none`}
              placeholder="Type your message here"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageValid(true);
              }}
            ></textarea>
            {!messageValid && (
              <p className="flex justify-start text-xs lg:text-[14px] text-red-500">
                Please enter your message.
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center items-center"
          >
            <button className="button button-lg bg-transparent border-2 border-green-500 font-bold p-3 m-2 rounded-md cursor-pointer text-green-800 relative overflow-hidden transition-colors duration-500 hover:bg-green-500 hover:text-white flex items-center animate-flash">
              <span className="mr-2 text-lg">Submit</span>
              <MdSend />
            </button>
            <WhatsApp />
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
