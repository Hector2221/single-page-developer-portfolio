import React, { useState } from "react";
import { Header } from "../header/Header";
import "./footer.css";

export const Footer = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    message: "",
  });

  let regulaExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleInputChange = (e) => {
    setDatos((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="footer">
      <div className="footer-infoContact content">
        <div className="footer-contact">
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="footer-form">
          <form action="" className="form">
            <input
              id="name"
              type="text"
              placeholder="NAME"
              value={datos.nombre}
              onChange={(e) => handleInputChange(e)}
              className={`nombre ${ datos.nombre ? "inputGreen" : "inputRed"} `}
              name="nombre"
            />
            <input
              id="email"
              type="email"
              placeholder="EMAIL"
              value={datos.email}
              onChange={(e) => handleInputChange(e)}
              name="email"
              className={`email ${ regulaExpEmail.test(datos.email) ? "inputGreen" : "inputRed"} `}
            />
            {regulaExpEmail.test(datos.email) && (
              <p id="alert"></p>
            )}
            <textarea
              id="message"
              placeholder="MESSAGE"
              name="message"
              value={datos.message}
              onChange={(e) => handleInputChange(e)}
              className={` ${ datos.message ? "inputGreen" : "inputRed"} `}
            ></textarea>
            <button className="contact-button" type="submit">
              Sed Message
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-header">
        <Header />
      </div>
    </div>
  );
};
